// Authentication middleware 
// verify karega ki user hai ya nhi hai 

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

// This verifyJWT function is an authentication middleware in Express that 
// verifies a user's access token (JWT) before allowing access to protected routes.

//To check:
//Does the incoming request have a valid access token?
//If yes, get the user associated with it and attach it to req.user.
//If not, throw an Unauthorized error.

export const verifyJWT = asyncHandler(async (req, res,    // res=>_ can be written in this way
    next) => {
    try {
// First tries to read the access token from cookies (req.cookies.accessToken).
//If not found, tries to read it from the Authorization header (e.g., Bearer <token>).
//This makes it flexible for both cookie-based and header-based auth.
        const token = req.cookies?.accessToken || req.header
            ("Authorization").replace("Bearer ", "")

        if (!token) {
            throw new ApiError(401, "Unauthorised request")
        }
        
//Uses jwt.verify() to validate and decode the token using your secret key.
        const decodedToken = jwt.verify(token, process.env.
            ACCESS_TOKEN_SECRET)

//Uses the decoded token's _id to find the user in the database
        const user = await User.findById(decodedToken?._id).
            select("-password -refreshtoken")

        if (!user) {
            // todo : discuss about frontend
            throw new ApiError(401, "Invalid Access Token")
        }


        //Attach the user to the request (req.user) so 
        // that downstream handlers (controllers) can access user info.
        req.user = user;
        next()     //Then call next() to proceed to the next middleware or route handler.
    }
    catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access token")
    }

})