const User = require('../models/User');

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
          res.json(user);
        });
      }

    })
    .catch(err => {
      return next(err);
    });
}
