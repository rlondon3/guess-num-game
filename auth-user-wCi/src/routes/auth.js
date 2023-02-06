const bcrypt = require('bcrypt');
const Joi = require('joi');
const _ = require('lodash');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const result = validate(req.body);

    if (result.error) return res.status(400).send(result.error.details[0].message);

    let user = await User.findOne({
        email: req.body.email
    });

    if (!user) return res.status(400).send('Invalid Email or Password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Password')

    const token = user.generateAuthToken();
    res.send(token);
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(req);
}

module.exports = router