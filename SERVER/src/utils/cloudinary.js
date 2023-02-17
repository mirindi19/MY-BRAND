const cloudinary = require("cloudinary");
const dotenv =require("dotenv").config();
cloudinary.config({
    cloud_name: "dblsyshxg",
    api_key: "175262494617865",
    api_secret: "gr2XlbQcnCxB7EiGJ-bPKZTPdf4",
});

const uploadImage = async (path , folder) => {
    try {
        const data = await cloudinary.v2.uploader.upload(path, {
            folder
        });
        return { url: data.url, publicId: data.public_id };
    } catch (error) {
        console.log(error)
    }
}

const deleteImage = async (public_id) => {
    await cloudinary.v2.uploader.destroy(public_id, (error, result) => {
        console.log(result,error)
    })
}
module.exports = {deleteImage,uploadImage};