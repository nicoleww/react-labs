const Contact = require('../models/contact');

module.exports = {
    index,
    create
}

async function index(req, res) {
    // 1. Get all Posts from the database
    // 2. Use res.json() to send the posts to the frontend
}

async function create(req, res) {
    console.log("AHHHHHHHHHHHHHHHHH")
    try {
        console.log("WEEEEEEEEEEEEE")
    await Contact.create({
        name: req.body.name,
        email: req.body.email,
        content: req.body.content,
    })
    res.status(200).json("ok")
} catch (err) {
    res.json(err);
}
}