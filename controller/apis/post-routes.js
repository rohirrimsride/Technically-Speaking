const router = require('express').Router();
const { Post, Comment, User } = require('../../model');

router.get('/', (req, res) => {
    console.log(req.body)
    Post.findAll({
        attributes: [
            'id',
            'post_title',
            'post_data',
            // 'post_url',
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_title',
            'post_data',
            // 'post_url',
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
        if (!dbPostData) {
            res.status(404).json({ message: 'There is no Post with that ID' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Post.create({
        post_title: req.body.post_title,
        post_data: req.body.post_data,
        // post_url: req.body.post_url,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    Post.update(
        {
            post_title: req.body.post_title,
            post_data: req.body.post_data,
            // post_url: req.body.post_url,
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.params.id
            },
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'There is no Post matching that ID' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'There is no Post matching that ID' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;