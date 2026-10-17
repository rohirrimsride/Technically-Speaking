// API version of withAuth: responds with 401 instead of redirecting,
// so fetch() callers see the failure instead of the login page HTML
const apiAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.status(401).json({ message: 'You must be logged in to do that.' });
    } else {
        next();
    }
};

module.exports = apiAuth;
