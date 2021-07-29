const USERS = [];
const {validationResult } = require('express-validator');

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
    res.status(201).send({success: true});

})

// unauthorized - 401