const router = require('express').Router();
const { includes } = require('lodash');
const { User, Post, Comment } = require('../../model');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']},
        attributes: [
            'id',
            'username',
            'email'
        ],
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: {exclude: ['password']},
        attributes: [
            'id',
            'username',
            'email'
        ],
        includes: [
            {
                model: Post,
                    attributes: ['id', 'post_title', 'post_data', 'post_url', 'postedAt', 'updatedPostAt']
            },
            {
                model: Comment,
                    attributes: ['id', 'comment_data', 'user_id', 'post_id', 'commentedAt', 'updatedCommentAt']
            }
        ] 
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'There is no User with that ID' });
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;