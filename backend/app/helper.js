const multer = require('multer');
const path = require('path');

const userProfileStorage = multer.diskStorage({
    destination: `uploads/${process.env.PROFILE_IMAGE_PATH}/`,
    filename: function(req, file, cb) {
        cb(null, Date.now() + Path.extname(file.originalname));
    },
});

exports.userProfileUpload = multer({
    storage: userProfileStorage,
    limits: {fileSize:1000000},
}).single("profileImg");

const userProfileStorage = multer.diskStorage({
    destination: `uploads/${process.env.AUDIO_PATH}/`,
    filename: function(req, file, cb) {
        cb(null, Date.now() + ".webm");
    },
});

exports.audioUpload = multer({
    storage: audioStorage,
    limits: {fileSize:1000000},
}).single("track");


const imageMsgFileStorage = multer.diskStorage({
    destination: `uploads/${process.env.IMAGE_MSG_PATH}/`,
    filename: function(req, file, cb) {
        cb(null, Date.now() + Path.extname(file.originalname));
    },
});

exports.imageMsgFileUpload = multer({
    storage: imageMsgFileStorage,
    limits: {fileSize:1000000},
}).single("profileImg");
