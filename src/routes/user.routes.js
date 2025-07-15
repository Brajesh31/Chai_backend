import {Router} from "express"
import { 
    logoutUser,
    loginUser,
    registerUser,
    refreshAccessToken,
     changeCurrentPassword, 
     getCurrentUser, 
     updateAccountDetails, 
     updateUserAvatar, 
     updateUserCoverImage, 
     getUserChannelProfile, 
     getWatchHistory} 
     from "../controllers/user.controller.js"

import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
//
const router = Router()

router.route("/register").post(
    upload.fields([             //// middleware inject multer ab aap images bhej page
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT,logoutUser)  // verifyJWT is the middleware


//logoutUser needs to know which user is logging out.
//verifyJWT checks:
//If a valid access token is present (in cookie or header).
//If the token is valid (not expired, not tampered).
//If the corresponding user exists in the database.

//🔄 Without verifyJWT, You Can’t Trust Who’s Logging Out
//If you remove verifyJWT:
//A malicious or unauthenticated request could call /logout and potentially://Try to manipulate another user's session.
//Cause inconsistencies (e.g., clearing tokens without DB updates).


router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/update-account").patch(verifyJWT,updateAccountDetails)

router.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)

router.route("/cover-image").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)

router.route("/c/:username").get(verifyJWT,getUserChannelProfile)

router.route("/history").get(verifyJWT,getWatchHistory)
export default router
