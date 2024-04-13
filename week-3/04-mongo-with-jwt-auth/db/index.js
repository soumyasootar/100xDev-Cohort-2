const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://soumyaswaroopsootar:QZoIlmDIOUbDb4Rr@cluster0.fxlg9ii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { require: true, type: String },
    password: { require: true, type: String }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { require: true, type: String },
    password: { require: true, type: String },
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}