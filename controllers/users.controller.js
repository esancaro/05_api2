const createError = require("http-errors");
const User = require("../models/users.model");
const jwt = require("jsonwebtoken");

module.exports.create = (req, res, next) => {
  const data = ({ name, email, password, bio } = req.body);

  User.create({
      ...data,
    })
    .then((user) => res.status(201).json(user))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        user.checkPassword(password).then((match) => {
          if (match) {
            // console.log('secure_var::', process.env.SECURE_VAR);
            const token = jwt.sign(
              { sub: user.id },
              process.env.SECURE_VAR,
              { expiresIn: "2h" }
            );
            // console.log('token::', token, user.id)
            res.json({ token });
          } else {
            next(createError(401, "unauthorized"));
          }
        });
      } else {
        next(createError(401, "unauthorized"));
      }
    })
    .catch(next);
};
