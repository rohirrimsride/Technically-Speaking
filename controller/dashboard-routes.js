const router = require('express').Router;
const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../model');

router.get('/', (req, res) => {
    console.log(req.session);
})

module.exports = router;