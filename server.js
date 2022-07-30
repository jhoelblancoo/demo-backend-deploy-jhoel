const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

var corsOptions = {
    origin: function(origin, callback) {
        // db.loadOrigins is an example call to load
        // a list of origins from a backing database
        db.loadOrigins(function(error, origins) {
            callback(error, origins);
        });
    },
};

app.get("/", (req, res) => {
    res.status(200).send("Hello server is running").end();
});

app.get("/hola", (req, res) => {
    res.status(200).send("pruebaaaaa").end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
});