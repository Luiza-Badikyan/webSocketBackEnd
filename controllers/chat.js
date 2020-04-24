const io = require('../socket').getIO();
const {GroupMessages}  =  require('../models');

module.exports.addMessage = async function (req, res) {

    io.on('new-message', (message) => {
        // console.log('-----------------------', message);
        io.emit('new-message', message);
    });

    // console.log('????????????', req.body);
    if (!req.body.message) throw 404;
    try {

        const newMessage = await GroupMessages.create({
            userId: +req.params.userId,
            groupId: +req.params.groupId,
            message: req.body.message,
        });

        // console.log('newMessage', newMessage);

        io.emit('new-message', newMessage);

        return res.status(200).send(newMessage);

    } catch (e) {
        // console.log('erroe', e);
        res.status(404).send('false');
    }
};

module.exports.getMessages = async function (req, res) {
    try {
        console.log('hhhhhhh');
        if (!req.params.groupId) throw 404;
        const users = await GroupMessages.findAll({
            where: {groupId: req.params.groupId}
        });

        // console.log(users);

        return res.status(200).send(users);
    } catch (e) {
        // console.log(e);
        res.status(408).send('errrrr')
    }

};
