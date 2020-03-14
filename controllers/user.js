// const groupMessage = require('../models/groupMessages');
const io = require('../socket').getIO();
const {GroupMessages}  =  require('../models');

module.exports.addMessage = async function (req, res) {
    // console.log('+++ req +++', req);
    // return res.json(req.body.message);

    io.on('new-message', (message) => {
        console.log('-----------------------', message);
        io.emit('new-message', message);
    });

    // return res.json(req.body.message);
    console.log('????????????', req.body);
    if (!req.body.message) throw 404;
    try {
        // const io = req.app.locals.io;

        const newMessage = await GroupMessages.create({
           userId: req.params.userId,
           groupId: req.params.groupId,
           message: req.body.message,
       });

        console.log('newMessage', newMessage);

        io.emit('new-message', newMessage);

        return res.status(200).send(newMessage);

    } catch (e) {
        console.log('erroe', e);
        res.status(404).send('false');
    }
};

module.exports.getMessages = async function (req, res) {
    // const io = req.app.locals.io;
    io.emit('new-message','dfdsfsdfsdfsdfsdfsd sdf sdf sdf s');
    res.send('ok')
};
