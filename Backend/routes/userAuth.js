const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next)=>{
    const authheader = req.headers["authorization"];
    const token = authheader && authheader.split(" ")[1];

    if (token==null){
        res.status(401).json({messgage:"Authentication token required"});
    }

    jwt.verify(token,"jwtStore123",(err,user)=>{
        if(err)
        {
            return res.status(403).json(err);
        }

        req.user = user;
        next();
    })
};

module.exports={authenticateToken};