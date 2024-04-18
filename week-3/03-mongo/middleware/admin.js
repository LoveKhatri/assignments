const { Admin } = require('./../db/index.js')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const headers = req.headers

    const username = headers.username
    const password = headers.password

    const data = await Admin.findOne({ username: username, password: password })

    if (!data) {
        res.status(401).json({
            "msg": "Not an Admin"
        })
        return;
    }

    next();
}

module.exports = adminMiddleware;