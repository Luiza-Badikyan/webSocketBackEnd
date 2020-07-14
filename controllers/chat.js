const io = require('../socket').getIO();
const {GroupMessages} = require('../models');
const {Users} = require('../models');
const {Group} = require('../models');
const {Attachment} = require('../models');

// module.exports.addMessage = async function (req, res) {
//
//     console.log('88888888', req.body);
//
//     io.on('new-message', (message) => {
//         io.emit('new-message', message);
//     });
//
//     if (!req.body.message) throw 404;
//     try {
//
//         const newMessage = await GroupMessages.create({
//             userId: +req.params.userId,
//             groupId: +req.params.groupId,
//             message: req.body.message,
//         });
//
//         io.emit('new-message', newMessage);
//
//         return res.status(200).send(newMessage);
//
//     } catch (e) {
//         res.status(404).send('false');
//     }
// };


module.exports.getMessages = async function (req, res) {
    try {
        console.log('hhhhhhh');
        if (!req.params.groupId) throw 404;

        const messages = await GroupMessages.findAll({
            where: {groupId: req.params.groupId},
            include: [
                {
                    model: Users, as: 'user',
                    attributes: {
                        exclude: ['date_of_birth', 'email', 'id', 'password', 'roles', 'updatedAt', 'createdAt']
                    }
                },
                {
                    model: Group, as: 'group',
                    attributes: {
                        exclude: ['createdAt', 'id', 'updatedAt']
                    }
                },
                {
                    model: Attachment, as: 'attachment',
                    attributes: {
                        exclude: ['id', 'messageId', 'createdAt', 'updatedAt']
                    }
                }

            ],
            order: [['createdAt']]
        });


        return res.status(200).send(messages);
    } catch (e) {
        res.status(408).send('error')
    }

};

module.exports.attacheFiles = async function (req, res) {
    try {

        console.log('---------------------');
        if (!req.params.messageId) throw 404;
        console.log('id', req.params.messageId);
        console.log('req', req.files);
        const attachment = await Attachment.create({
            messageId: req.params.messageId,
            fileName: req.file.originalname,
            type: req.file.mimetype,
            url: (req.file) ?
                // `${req.protocol}://${req.headers.host}/uploads/${Date.now() + req.file.originalname}`: null
                `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`: null
        });
        console.log('---attachment---', attachment);
        await attachment.save();
        return res.status(200).send(attachment);

    } catch (e) {
        res.status(408).send(e);
    }
};


/////////////////////////////////////////////////////////////



module.exports.addMessage = async function (req, res) {

    console.log('test===> ', req);

    // console.log('88888888', req.body);

    io.on('new-message', (message) => {
        io.emit('new-message', message);
    });

    if (!req.body.message && !req.files.length) throw 404;

    try {
        const newMessage = await GroupMessages.create({
            userId: +req.params.userId,
            groupId: +req.params.groupId,
            message: req.body.message ? req.body.message : '',
        });

        if (req.files.length) {
            newMessage.dataValues['attachment'] = [];
            const x = await addAttachments(newMessage.id, req);
            await Promise.all(x).then(value => {
                newMessage.dataValues['attachment'].push(...value);
                return newMessage
            })
        }

        io.emit('new-message', newMessage);

        console.log('newMessage ---> ', newMessage);

        return res.status(200).send(newMessage);

    } catch (e) {
        console.log(e.message);
        res.status(404).send('false');
    }
};

function addAttachments(id, req) {
    console.log('----------------------------');
        const attachments = [];

        [...req.files].forEach((file, i) => {
            const attachment = Attachment.create({
                messageId: id,
                fileName: file.originalname,
                type: file.mimetype,
                url: (file) ?
                    `${req.protocol}://${req.headers.host}/uploads/${file.filename}`: null
            });
            attachments.push(attachment);
        });

        console.log('attachments ===> ', attachments);

        return attachments;

}