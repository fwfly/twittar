const express = require('express');
const app = express();

require("./routers/twit_router")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
