const router = require('express').Router();
const { Post, User, Comment } = require('../model');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    // console.log(req.session);
    console.log('======================');
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'post_title',
            'post_data',
            'user_id',
            'postedAt',
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
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'post_title',
            'post_data',
            'user_id',
            'postedAt',
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
        if(dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('post-edit', {
                post,
                loggedIn: true
            }); 
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;