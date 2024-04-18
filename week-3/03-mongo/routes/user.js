const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const data = req.body;

    const newUser = new User({
        username: data.username,
        password: data.password
    })

    await newUser.save()

    res.status(200).json({
        message: "User Created"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const courses = await Course.find()

    res.json(courses)
    return
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username

    console.log(await User.findOne({ username }))

    await User.updateOne({ username: username }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.status(200).json({
        message: "Course Purchased"
    })

    return
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({ username: req.headers.username, password: req.headers.password })

    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    })

    res.status(200).json({
        courses: courses
    })

    return
});

module.exports = router