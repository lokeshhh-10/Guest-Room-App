const router = require('express').Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const User = require("../models/User")


/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

//USER REGISTER
router.post("/register", upload.none(), async ( req, res ) =>{
   try {
        // Take all the information form the form
         const { firstName, email, password } = req.body;
        
        //Check if user is already exists
        const existingUser = await User.findOne({ email })
        if (existingUser){
            return res.status(409).json({ message : "User already exists!"})
        }

        if (!password) {
            throw new Error('Password is undefined or empty');
            }

        //Hash the password using bcrytjs
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)

        //Create a New user
        const newUser = new User({
            firstName,
            email,
            password : hashPassword,
        });

        //Save the new User
        await newUser.save()

        //Sent a Successfull message
        res.status(200).json({ message : "User registered successfully!", user: newUser})

    } catch (err) {
        console.log(err)
        res.status(500).json({ message : "Registration failed!", error: err.message})
        
    }
})

// USER LOGIN
router.post("/login", async (req, res) =>{
    try {
        //Take all the info form form
        const { email, password } = req.body

        //Check if user exits
        const user = await User.findOne({email});
        if (!user){
            return res.status(409).json({ messsage : "User doesn't exits!"})
        }

        //Compare the password with hashed password
        const Match = await bcrypt.compare(password, user.password)
        if (!Match){
            return res.status(400).json({ message : "Invalid Credentials!"})
        }

        //Generate JWT token
        const token = jwt.sign({ id : user._id}, process.env.JWT_SECRET)
        delete user.password

        res.status(200).json({ token, user })

        
    } catch (err) {
        console.log(err)
        res.status(500).json({ error : err.message })
    }
})

module.exports = router