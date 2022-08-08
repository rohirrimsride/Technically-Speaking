const router = require('express').Router();
const { Post, User, Comment } = require('../model');

router.get('/', (req, res) => {
    // console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'post_title',
            'post_data',
            'user_id',
            'postedAt',
            'updatedPostAt'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_data', 'post_id', 'user_id', 'commentedAt'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
        
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/post/:id', (req, res) =>{
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_title',
            'post_data',
            'user_id',
            'postedAt',
            'updatedPostAt'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_data', 'post_id', 'user_id', 'commentedAt'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        const post = dbPostData.get({ plain: true });
        console.log(post);
        res.render('post-single', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;