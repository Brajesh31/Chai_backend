import mongoose from "mongoose";
import jwt from 'jsonwebtoken'   // npm i jsonwebtoken => for generating tokens
import bcrypt from "bcrypt"      // npm i bcrypt  => use to hash the password

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true
    },
    coverImage: {
        type: String, // cloudanary url
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }

}, { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()

})


//methods to checque if password is correct or not 
userSchema.methods.isPasswordCorrect = async function
(password){
    return await bcrypt.compare(password,this.password)   // return true/false
}



// The two tokens — access token and refresh token — are 
// used together to implement a secure and efficient authentication 
// system in web applications, especially in systems using JWT (JSON Web Tokens) for stateless authentication.




//✅ 1. Access Token
//Purpose: This token is used to authenticate API requests.
//Contains: Important user info like _id, email, username, etc.
//Expiry: Short-lived (e.g., 15 minutes, 1 hour).
//Why Short-lived?
//If it gets stolen, damage is limited.
//Forces periodic re-authentication to ensure session validity.

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            //payload
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


//🔁 2. Refresh Token
//urpose: To generate a new access token without asking the user to log in again.
//Contains: Only _id (minimal info to reduce risk if compromised).
//Expiry: Long-lived (e.g., 7 days, 30 days).
//Stored: Often in an HttpOnly cookie or secure storage.

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            //payload
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)