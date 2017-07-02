const Auth = require('../db/controllers/Auth');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../../client'});
  });

  app.post('/signup', Auth.signup);

};
