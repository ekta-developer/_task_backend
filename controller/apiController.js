
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../model/model");
dotenv.config();
// const errorHandler = require("./utils/errorHandler.js");

const createUser = async (req, res) => {
  try {
    console.log(req.body); // Check what's in req.files

    if (!req.files || !req.files['document'] || !req.files['document'][0] || !req.files['profile'] || !req.files['profile'][0]) {
      return res.status(400).json({ message: "Missing or invalid files" });
    }

    const document = req.files['document'][0];
    const profile = req.files['profile'][0];

    //const { firstname, middlename, lastname, email, password, confirmpass, mobile, state, gender, dob, username, city, district, hobbies, status } = req.body;

    // const newUser = new User({
    //   firstname, middlename, lastname, email, password, confirmpass, mobile, state, gender, dob, username, city, district, hobbies, status, document: document.path, profile: profile.path,
    // });

    const newUser= new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "Files and user data saved successfully" });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).json({ message: "Error saving data", error: error.message });
  }
};



// const createUser = async (req, res) => {
//   try {
//     const {
//       firstname,
//       middlename,
//       lastname,
//       email,
//       password,
//       confirmpass,
//       mobile,
//       state,
//       gender,
//       dob,
//       username,
//       city,
//       district,
//       hobbies,
//       status,
//     } = req.body;

//     // if (!firstname ||!middlename|| !lastname || !email || !password || !confirmpassword || !mobile || !state || !gender || !dob || !username) {
//     //   return res.status(400).json({ message: "Missing required fields" });
//     // }

//     const document= req.files['document'][0];
//     const profile= req.files['profile'][0];

//     // if (!document || !document[0] || !profile || !profile[0]) {
//     //   return res.status(400).json({ message: "Missing files" });
//     // }

//     const newUser = new User({
//       firstname,
//       middlename,
//       lastname,
//       email,
//       password,
//       confirmpass,
//       mobile,
//       state,
//       gender,
//       dob,
//       username,
//       city,
//       district,
//       hobbies,
//       status,
//       document:document.path,
//       profile:profile.path,
//       // city: req.body.city || "",
//       // district: req.body.district || "",
//       // hobbies: req.body.hobbies || [],
//       // status: req.body.status || "",
//       // document: document[0].path,
//       // profile: profile[0].path
//       // document:document.path ,
//       // profile:profile.path,
//     });
//     console.log(newUser,'===============================')

//     await newUser.save();
//     res.status(200).json({ message: "Files and user data saved successfully" });
//   } catch (error) {
//     console.error("Error saving data to MongoDB:", error);
//     res.status(500).json({ message: "Error saving data" });
//   }
// };

module.exports=createUser;
//Post Method
// router.post('/post,' (req, res) => {
//     res.send('Post API')
// })

// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })
