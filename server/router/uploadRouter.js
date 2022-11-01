const express = require('express');
const { uploadImg } = require('../middleware/uploadImage');

const { uploadAvatar, destroyAvatar } = require('../controller/uploadFunc');
const verifyUser = require('../middleware/verifyUser');
const verifyAdmin = require('../middleware/verifyAdmin');

const router = express.Router() 



router.route("/upload_avatar").post(verifyUser,verifyAdmin,uploadImg,uploadAvatar)
router.route("/destroy_avatar").post(verifyUser,verifyAdmin,destroyAvatar)


module.exports  = router;