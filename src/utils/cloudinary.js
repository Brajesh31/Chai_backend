// in every project we can use this code 

import {v2 as cloudinary} from "cloudinary"
import fs from "fs"  // file system use for delete,unlink ,and many other options

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});


//A function that:
//Takes a local file path (like ./uploads/image.jpg).
//Uploads that file to Cloudinary.
//Returns the result or handles the error

const uploadOnCloudinary = async (localFilePath) => {
       try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"  //resource_type: "auto" lets Cloudinary automatically detect if the file is an image, video, etc.
        })
        //file has been uploaded successfully
        //console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath);  // agar future main file succcesfully upload ho gyi hai to automattically remove ho jayegi
        return response;

       }catch(error){
          fs.unlinkSync(localFilePath)  // remove the locally saved temporary file as the upload operation got failed
          return null
       }
}


export {uploadOnCloudinary}