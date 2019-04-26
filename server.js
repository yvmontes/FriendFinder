// Dependencies
// =============================================================
var express = require("express");
var PORT = process.env.PORT || 8060;
var path = require("path");
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require('./app/routing/apiRoutes');
apiRoutes(app);

var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

