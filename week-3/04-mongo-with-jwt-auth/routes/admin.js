const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

const jwt = require("jsonwebtoken")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body

    try {

        const admin = Admin.create({
            username, password
        })
        res.send("Admin Created Sucessfully ")
    } catch (error) {
        console.log("error: ", error);
        res.status(500).send("error in creating admin")
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body

    const user = await Admin.find({
        username, password
    })
    console.log("user: ", user);

    if (user.length == 0 || !user) {
        res.status(500).send("wrong credentials")
    }

    const token = jwt.sign({ username }, "SECRET")

    res.json({ token })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;