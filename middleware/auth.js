const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
//Get token form header
const token = req.header('x-auth-token')

//Check if token is not there
if(!token){
    return res.status(401).json({msg: 'Authorization denied'})
}
try {
    const decoded = jwt.verify(token, process.env.JWTSECRET)
    req.user = decoded.user
    next()
} catch (err) {
    res.status(401).json({msg: 'Authorization denied'})
}
}