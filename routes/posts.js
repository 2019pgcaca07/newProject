const express = require('express');
const router =express.Router();
const postController = require('../controllers/post_controller');


//router.get('/profile',userController.profile);
//router.get('/contact',userController.contact);
router.get('/account',postController.account);



module.exports = router;