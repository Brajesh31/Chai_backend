import express from "express"
import cors from "cors"    // Imports the cors package to enable Cross-Origin Resource Sharing, allowing your server to handle requests from different origins (domains, ports, etc.).
import cookieParser from "cookie-parser"  
//Imports the cookie-parser middleware which allows you to read and manipulate cookies in request and response objects.

const app = express() // Creates an instance of an Express application (app), 

// read cors npm documentation
//Adds CORS middleware to allow cross-origin requests.
//origin: process.env.CORS_ORIGIN: Specifies which frontend origin (like http://localhost:3000) is allowed to access your backend.
//credentials: true: Allows cookies, authorization headers, or TLS client certificates to be sent in cross-origin requests.

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))         /// app.use()  for middleware and configurations

// data bahut jagah se aa raha hai uske ke liye best practices 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))  /// assets rakhna
app.use(cookieParser())



// routes import

import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)  // This line tells your Express app to use the userRouter for all routes that begin with /api/v1/users.

/////http://localhost:8000/api/v1/user/register

export {app}