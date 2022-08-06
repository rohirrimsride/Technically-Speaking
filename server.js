const path = require('path');
const express = require('express');
// const routes = require('./controller/');
const session = require('express-session');
const app = express();

const PORT = process.env.PORT || 3003;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
// parses data into a json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('public', express.static(path.join(__dirname + 'public')));
app.use(require('./controller/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
