const router = require('express').Router();
const { Comment, Post, User } = require('../../model');
const apiAuth = require('../../utils/api-auth');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', apiAuth, (req, res) => {
    Comment.create({
        comment_data: req.body.comment_data,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
        commentAt: req.body.commentAt
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', apiAuth, (req, res) => {
    // only the comment's author can delete it
    Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'There is no Comment matching that ID' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;