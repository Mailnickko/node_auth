const Auth = require('../db/controllers/Auth');
const passportConfig = require('./passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../../client/' });
  });

  app.post('/signup', Auth.signup);
  app.post('/signin', requireSignin, Auth.signin);
};
