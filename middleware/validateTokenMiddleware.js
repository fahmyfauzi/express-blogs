const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  //memeriksa authorization header diawali "Bearer"
  if (authHeader && authHeader.startsWith("Bearer")) {
    //ambil token dari header authorization
    token = authHeader.split(" ")[1];

    //verifikasi jwt
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
      //jika terjadi kesalahan saat verifikasi token
      if (err) {
        return res.status(401).json({
          status: false,
          message: "user is not authorized",
        });
      }

      //menyimpan informasi pengguna
      req.user = decode.user;
      console.log(decode);

      //lanjut ke middleware selanjutnya
      next();
    });
  }
  //cek token
  if (!token) {
    return res.status(401).json({
      status: false,
      message: "user is not authorized or token missing",
    });
  }
});

module.exports = validateToken;
