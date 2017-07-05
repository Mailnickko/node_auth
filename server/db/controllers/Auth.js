const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../../../config');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(422).send({ error: "Please check your credentials" });
  }

  User.findOne({email})
    .then(existingUser => {
      if (existingUser) {
        return res.status(422).send({ error: 'Email is in use' });
      } else {
        const user = new User({
          email: email,
          password: password
        });

        user.save(function(err) {
          if (err) { return next(err); }
          // Repond to request indicating the user was created
          res.json({token: tokenForUser(user)});
        });
      }

    })
    .catch(err => {
      return next(err);
    });
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  // user property is supplied by passport after localStrategy's done callback
  res.send({ token: tokenForUser(req.user) });
}
