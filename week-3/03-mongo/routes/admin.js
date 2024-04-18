const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require('./../db/index.js')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const data = req.body

    if (!data.username || !data.password) {
        res.status(404).json({
            message: "Invalid Data"
        })
    }

    await Admin.create({
        username: data.username,
        password: data.password
    })

    res.json({
        message: "Admin Created Successfully"
    })
    return;
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const data = req.body;

    const newCourse = await Course.create({
        title: data.title,
        description: data.description,
        price: data.price,
        imageLink: data.imageLink,
        published: data.published
    })

    res.status(200).json({
        message: "Course Created",
        courseId: newCourse._id
    })
    return
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const courses = await Course.find()
    res.json(courses)

    return;
});

module.exports = router;