const { Admin } = require('./../db/index.js')
const jwt = require('jsonwebtoken')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization.split(" ")[1]
    try {
        const verified = jwt.verify(token, "secret");

        if (!verified.username) {
            res.status(401).json({
                "msg": "Not an Admin"
            })
            return;
        }

        next();
    } catch (e) {
        res.status(404).json({
            msg: "Invalid Input"
        })
        return;
    }
}

module.exports = adminMiddleware;