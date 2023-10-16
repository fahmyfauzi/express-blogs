const constants = require("../constants");
const errorHandler = (error, req, res, next) => {
  //status code yang dikirim dari controller kalau tidak ada maka default 500
  const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized Failed",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    default:
      console.log("Everything its ok!");
      break;
  }
  next();
};

module.exports = errorHandler;
