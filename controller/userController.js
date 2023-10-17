const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //validasi email/username/password tidak ada
  if (!username || !email || !password) {
    return res.status(400).json({
      status: false,
      message: "Semua wajib diisi",
    });
  }

  //validasi email sudah ada
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return res.status(400).json({
      status: false,
      message: "Email sudah ada",
    });
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ", hashPassword);

  //buat user
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  console.log(`User created: ${user}`);

  //jika user berhasil dibuat
  if (user) {
    return res.status(201).json({
      status: true,
      message: "register success",
      data: user,
    });
  } else {
    return res.status(400).json({
      status: false,
      message: "Validation error",
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //validasi email dan password
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Email dan password wajib diisi",
    });
  }

  //cek email
  const user = await User.findOne({ email });
  //cek email dan password yang sudah di hashing
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        //payload data
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      //secret unique
      process.env.ACCESS_TOKEN_SECRET,

      //token expired
      { expiresIn: "15m" }
    );

    return res.status(200).json({
      status: true,
      message: "Login success",
      accessToken: accessToken,
    });
  }
});

const current = asyncHandler(async (req, res) => {});

module.exports = {
  register,
  login,
  current,
};
