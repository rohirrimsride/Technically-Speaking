const { Post } = require('../model');

const postData = [
    {
        post_title: 'Setting up Seed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/seedingforsuccess.html',
        user_id: 1
    },
    {
        post_title: 'Setting up Api files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/apiforsuccess.html',
        user_id: 9
    },
    {
        post_title: 'Setting up Table files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/tablingforsuccess.html',
        user_id: 8
    },
    {
        post_title: 'Setting up Schema files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/schemasforsuccess.html',
        user_id: 7
    },
    {
        post_title: 'Setting up files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/filingforsuccess.html',
        user_id: 6
    },
    {
        post_title: 'Setting up Model files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/Modelingforsuccess.html',
        user_id: 5
    },
    {
        post_title: 'Setting up html files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://hypermasters.com/markupforsuccess.html',
        user_id: 4
    },
    {
        post_title: 'Setting up css files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://cssmasters.com/cssforsuccess.html',
        user_id: 3
    },
    {
        post_title: 'Setting up Javascript files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://JSmasters.com/JSforsuccess.html',
        user_id: 2
    },
    {
        post_title: 'Setting up handlebars files',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://htmlmasters.com/htmlforhours.html',
        user_id: 1
    },
    {
        post_title: 'Setting up Queries for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://seedmasters.com/queryforsuccess.html',
        user_id: 2
    },
    {
        post_title: 'Setting up a Reed Instrument Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://reedmasters.com/reedingforsuccess.html',
        user_id: 3
    },
    {
        post_title: 'Setting up a Dough Kneading Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://kneadmasters.com/kneadingforsuccess.html',
        user_id: 4
    },
    {
        post_title: 'Setting up a Mead fermentation Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://meadmasters.com/meadingforsuccess.html',
        user_id: 5
    },
    {
        post_title: 'Setting up Jeeps for a Off-Roading',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://jeepmasters.com/jeepingforsuccess.html',
        user_id: 6
    },
    {
        post_title: 'Setting up Heed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://heedmasters.com/heedingwisdom.html',
        user_id: 7
    },
    {
        post_title: 'Setting up Bleed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://bleedmasters.com/weekendMMAfighters.html',
        user_id: 8
    },
    {
        post_title: 'Setting up Deed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://deedmasters.com/deedsforsuccess.html',
        user_id: 9
    },
    {
        post_title: 'Setting up Greed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://greedmasters.com/greedingforsuccess.html',
        user_id: 10
    },
    {
        post_title: 'Setting up Feed files for a Database',
        post_data: "I've really enjoyed writing about these topics",
        // post_url: 'https://feedmasters.com/feedingforsuccess.html',
        user_id: 1
    },
];

const seedPost = () => Post.bulkCreate(postData); 

module.exports = seedPost;