const express = require('express');
const { check } = require('express-validator');

const {signupUser, loginUser, getUsers, listAdmins} = require('../controllers/auth.controller');
const {validateUser, isAdmin} = require('../middleware/auth');

const router = express.Router();

// POST
router.post(
    '/signup',
    check('email').isEmail().withMessage('Please provide a valid email address'),
    check('password').isLength({ min: 5 , max: 10}).withMessage('Password must be of length between 5-10 characters'), 
    signupUser);

// POST
router.post('/login', 
    check('email').isEmail().withMessage('Please provide a valid email address'),
    loginUser
);

router.get('/users', validateUser, getUsers);

router.get('/admin', validateUser, isAdmin, listAdmins);

// Private Routes
// '/users' , only loggedIn users can access all the users


module.exports = router;
