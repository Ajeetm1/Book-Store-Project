const router = require("express").Router();

const User = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('./userAuth');
// sign up page creating

router.post("/sign-up", async (req, res) => {


    try {

        const { username, email, password, address } = req.body;

        console.log("cheking body", req.body)
        // checking username length is more than 4 or not

        if (username.length <= 3) {
            return res.status(400)
                .json({ message: "username length should be greater than 3" })
        }

        // checking username already exists or not

        const checkExistuser = await User.findOne({ username: username });
        if (checkExistuser) {

            return res.status(400).json({ message: "Username already exist" })


        }

        // checking email already exists or not

        const existemail = await User.findOne({ email: email });
        if (existemail) {

            return res.status(400).json({ message: "email already exist" })
        }

        // checking password's length

        if (password.length <= 5) {
            return res.status(400).json({ message: "password length is too short." })
        }

        const hashPasword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username: username,
            email: email,
            password: hashPasword,
            address: address,
            role:"user"

        });
        await newUser.save();
        return res.status(200).json({ message: "signup Successfully" })



    }

    catch (eror) {
        console.error("signup error", eror)
        res.status(500).json({ message: "Internal server error" })
    }
})



// sign in ......

router.post("/sign-in", async (req, res) => {



    try {
        const { username, password } = req.body;
        const checkexistuser = await User.findOne({ username });

        if (!checkexistuser) {
           return res.status(400).json({ message: "not registored user" });
            
        }
        //  (password) user filling and (checkexsituser) avalable in database.
        await bcrypt.compare(password, checkexistuser.password, (err, data) => {
            if (data) {
                const authClaims = [
                    { name: checkexistuser.username },
                    { role: checkexistuser.role }
                ];
                const token = jwt.sign(
                    {
                        authClaims
                    }, "jwtStore123",
                    {
                        expiresIn: "30d"
                    }
                );
                return res.status(200).json({ id: checkexistuser.id, role: checkexistuser.role, token: token })
            }
            else {
                return res.status(400).json({ message: "Invalid Credencials" })
            }
        })

    }

    catch (eror) {
        console.error("signup error", eror)
        res.status(500).json({ message: "Internal server error" })
    }
})


// get user information......


router.get("/userInformation", async (req, res) => {

    try {
        const { id } = req.headers;
        const data = await User.findById(id).select("-password");
        return res.status(200).json({ data })
    }

    catch (eror) {
        res.status(500).json({ message: "internal server error" })
    }
})

// update address in database..
// check user is authrized for change or not.

router.put("/update-address", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { address } = req.body;
        await User.findByIdAndUpdate(id, { address: address })
        return res.status(200).json({ message: "address updated" })


    }
    catch (eror) {
        res.status(500).json({ message: "internal server error" })
    }
})





module.exports = router;