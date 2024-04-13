// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authToken = req.headers.authorization; // bearer token
    const token = authToken.split(" ")[1]

    if (!token) {
        res.status(401).json({ error: "token not present" })
    }
    try {
        const decodedValue = jwt.verify(jwt, "SECRET")
        if (decodedValue.username) {
            next()
        } else {
            res.status(403).json({
                msg: "you are not authenticated"
            })
        }
    } catch (error) {
        res.json({ error })
    }


}

module.exports = adminMiddleware;