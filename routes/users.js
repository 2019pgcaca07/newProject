const express = require('express');
const router =express.Router();
const passport = require('passport');


const userController = require('../controllers/users_controller');


router.get('/profile',userController.profile);
router.get('/contact',userController.contact);


router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);


router.post('/create',userController.create);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),userController.createSession)



module.exports = router;