const express = require('express');
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post('', (req,res) => {
    bcrypt.hash(req.body.password,10).then( hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            created_at: req.body.created_at
        })

        user.save()
            .then( result => {
                res.status(201).json({
                    message: "The user has been created", result
                })
            })
            .catch(error => {
                res.status(500).json({ error })
            });
    });
});

module.exports = router;
