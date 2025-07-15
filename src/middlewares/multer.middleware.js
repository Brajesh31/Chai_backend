import multer from "multer"
//This code configures the multer middleware for handling file uploads in a Node.js (Express) application.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")   // sari files iss folder(public) main
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname)
  }
})
//multer.diskStorage({...}): Creates a storage engine to control where and how files are saved.
//destination: A callback function that sets the folder where uploaded files should be stored (./public/temp).
//filename: A callback function that sets the name of the saved file (in this case, it uses the original filename).

export const upload = multer({
  storage,
})

//This initializes multer with the custom storage configuration.
//upload is a middleware that can be used in routes to handle file uploads.