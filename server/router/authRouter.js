const express = require('express');
const router = express.Router();
const { getUser, registerUser, activationEmail, loginUser, getAccessToken, forgotPassword, resetPassword, getUserInfo, getAlluserInfo, logout, updateUser, deleteUser, updateUserRole } = require('../controller/authFunc');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyUser = require('../middleware/verifyUser');




router.route("/").get(getUser);
router.route("/register").post(registerUser);
router.route("/activation").post(activationEmail);
router.route("/login").post(loginUser)
router.route("/refresh_token").post(getAccessToken)
router.route("/forgot").post(forgotPassword)
router.route("/reset").post(verifyUser,resetPassword) 
router.route("/user_info").get(verifyUser,getUserInfo)
router.route("/all_user").get(verifyUser,verifyAdmin,getAlluserInfo)
router.route("/logout").get(logout) 
router.route("/update").patch(verifyUser,updateUser);
router.route("/update_role/:id").patch(verifyUser,verifyAdmin,updateUserRole);
router.route("/delete/:id").delete(verifyUser,verifyAdmin,deleteUser)
module.exports = router;