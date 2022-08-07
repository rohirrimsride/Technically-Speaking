const router = require('express').Router();
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

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbUserData => {
        console.log(req.body.email);
        console.log(dbUserData.email);
        if (!dbUserData) {
            res.status(404).json({ message: 'The password is incorrect.' });
            return;
        }
        
        const confirmPassword = dbUserData.checkPassword(req.body.password);
        console.log(dbUserData.password);
        console.log(req.body.password);
        console.log(confirmPassword);
        if (!confirmPassword) {
            res.status(404).json({ message: 'The password is incorrect.'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            
            res.json({ message: 'Login successful'});
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;