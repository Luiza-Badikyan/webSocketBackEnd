const jwt = require('jsonwebtoken');
const {Users} = require('../models');
const httpStatus = require('http-status');

module.exports = async function (req, res, next) {
    // try {
    //     const token = req.headers.authorization.split(' ')[1];
    //     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //     const email = decodedToken.email;
    //     if (email) {
    //         const user = await Users.findOne({
    //             where: {email: email}
    //         });
    //         if (!user) {
    //             throw 'Invalid user email';
    //         } else {
    //             next();
    //         }
    //     }
    //     // const userId = decodedToken.userId;
    //     // if (req.params.userId && req.params.userId !== userId) {
    //     //     throw 'Invalid user ID';
    //     // } else {
    //     //     next();
    //     // }
    // } catch (e) {
    //     res.status(401).json({
    //         error: new Error('Invalid request!')
    //     })

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        console.log("aaaa",token);
        verifyToken(token)
            .then(decodedToken => {
                console.log('res.locals.user', decodedToken);
                res.locals.user = decodedToken;
                next();
            })
            .catch(err => {
                res
                    .status(httpStatus.UNAUTHORIZED)
                    .json({authorization: [{msg: err ? err.message : 'Unauthorized'}]});
            });
    } else {
        console.log('test');
        res
            .status(httpStatus.UNAUTHORIZED)
            .json({authorization: [{msg: 'Unauthorized'}]});
    }
};

function verifyToken(token) {
    console.log('???????????', token);
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'dev-jwt', (err, decodedToken) => {
            if (err || !decodedToken) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        });
    });
}

