const multer =require("multer");
const path=require("path");

// const   multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req, file, cb) => {
//         let ext = path.extname(file.originalname);
//         if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"){
//             cb(new Error("File type is not supported"), false);
//             return;
//         }
//         cb(null, true);
//     },
// });
const storage = multer.diskStorage({})
const upload = multer({ storage: storage })

module.exports =upload;
