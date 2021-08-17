const USERS = [];
const {validationResult } = require('express-validator');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

exports.signupUser = ((req, res) => {
    const email = req.body.email
    const password = req.body.password

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
    USERS.push({
        email,
        password
    })

    res.status(201).send({});
})

exports.loginUser = ((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const isUserExists = USERS.find((user) => user.email === email);

    console.log('isUserExists', isUserExists);

    if(!isUserExists) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordCorrect = isUserExists.password === password; // return a boolean , true/false

    if(!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid email or password/ password'});
    }

    // based on your email and password, a token is generated.
    res.status(201).send({success: token});

})

exports.getUsers = ((req, res) => {
    res.status(200).send({USERS});
})

exports.listAdmins = ((req, res) => {
    res.status(200).send({Admins: 'Sending all admins'});
})

// unauthorized - 401