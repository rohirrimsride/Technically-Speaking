const { Post } = require('../model');

const postData = [
    {
        post_title: 'Setting up Seed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/seedingforsuccess.html',
        user_id: 1
    }
];

const seedPost = () => Post.bulkCreate(postData); 

module.exports = seedPost;