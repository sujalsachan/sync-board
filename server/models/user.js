import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required:[true, 'Username is required'],
        trim:true,
    },
    email : {
        type : String,
        required:[true, 'Email is required'],
        trim:true,
        unique:true,
    },
    phone : {
        type : Number,
        required:[true, 'Phone number is required'],
        unique:true,
    },
    password : {
        type : String,
        required:[true, 'Password is required'],
        trim:true,
    },
}, {
    timestamps:true
})

const User = mongoose.model('User', userSchema);

export default User;    