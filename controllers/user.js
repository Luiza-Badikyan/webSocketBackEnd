const {Users} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator/check');

module.exports.register = async function (req, res) {
    if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.password) throw 404;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res
            .status(400)
            .json({validation: errors.array()});
        return false;
    }

    const candidate = await Users.findOne({
        where: {email: req.body.email}
    });
    if (candidate) {
        res.status(409).json({
            message: 'This email is already registered'
        });
    } else {
        try {

            const salt = bcrypt.genSaltSync(10);

            const user = await Users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                date_of_birth: req.body.date_of_birth,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
                roles: 1
            });

            const token = await jwt.sign({
                id: user.id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                roles: 1
            }, 'dev-jwt', {expiresIn: 60 * 60 * 24});
            await user.save();
            res.status(200).send({
                token: `${token}`
            });
        } catch (e) {
            res.status(404).send(e.message);
        }
    }

};


module.exports.login = async function (req, res) {

    const candidate = await Users.findOne({
        where: {email: req.body.email}
    });
    if (candidate) {
        console.log('candidate', candidate);
        const password = bcrypt.compareSync(req.body.password, candidate.password);
        if (password) {
            const token = jwt.sign({
                id: candidate.id,
                first_name: candidate.first_name,
                last_name: candidate.last_name,
                email: candidate.email,
                roles: candidate.roles
            }, 'dev-jwt', {expiresIn: 60 * 60 * 24});

            res.status(200).send({
                token: `${token}`
            })

        } else {
            res.status(401).send({
                message: `Unauthorized`
            })
        }
    } else {
        res.status(404).send({
            message: `User is not found`
        })
    }

    console.log('Login');
};