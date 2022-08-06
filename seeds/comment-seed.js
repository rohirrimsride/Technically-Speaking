const { Comment } = require('../model');

const commentData = [
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 2,
        post_id: 4
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 4,
        post_id: 6
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 5,
        post_id: 7
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 6,
        post_id: 8
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 7,
        post_id: 9
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 8,
        post_id: 10
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 9,
        post_id: 2
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 3,
        post_id: 4
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 4,
        post_id: 5
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 5,
        post_id: 6
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 6,
        post_id: 7
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 7,
        post_id: 8
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 8,
        post_id: 9
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 9,
        post_id: 10
    },
    {
        comment_data: 'Really loved this post, I found it extremely insightful and helpful.',
        user_id: 1,
        post_id: 3
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;