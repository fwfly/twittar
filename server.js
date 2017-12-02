const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const helmet = require('helmet');
const path = require('path');

app.use(helmet());
if( process.env.NODE_ENV = "production"){
  app.use(serveStatic(path.join(__dirname, 'twitta', 'build')));
}
require("./routers/twit_router")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
