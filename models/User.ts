import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    isVerified: { type: Boolean, default: false },
    verifyToken: {type: String},
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;