const express = require('express');
const app = express();

require('./config/middlewares.js')(app, express);
require('./db/config.js');
require('./config/routes.js')(app, express);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Hanging out at ${port}`);
});

module.exports = app;
