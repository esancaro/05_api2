const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");

module.exports.auth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return next(
      createError(401, "unauthorized: authorization header not provided")
    );
  }

  const token = authorization?.replace("Bearer ", "");
  console.log("token::", token);

  try {
    const decoded = jwt.verify(token, process.env.SECURE_VAR);
    // console.log("decoded::", decoded);
    User.findById(decoded.sub)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(createError(401, "unauthorized: user not found"));
        }
      })
      .catch(next);
  } catch (error) {
    next(createError(401, "unauthorized: invalid token"));
  }
};
