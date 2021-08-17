const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const isAdmin = false;

exports.validateUser = (req, res , next) => {
    const headers = req.headers
    const authToken = headers.authorization;
    
    if(authToken === token) {
        next()
    } else {
        return res.status(401).json({ message: 'Unauthorized.Please login first'});
    }
}

exports.isAdmin = (req, res , next) => {
    if(isAdmin) {
        next()
    } else {
        return res.status(401).json({ message: 'Accesible by admins only'});
    }
}