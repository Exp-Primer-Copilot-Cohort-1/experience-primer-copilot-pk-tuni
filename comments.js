// Create web server
// load modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var comments = require("./comments");

// create instance of express
var app = express();

// specify port to listen on
app.set("port", process.env.PORT || 3000);

// use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use static middleware
app.use(express.static(path.join(__dirname, "public")));

// get comments
app.get("/api/comments", function(req, res) {
    comments.get(function(err, comments) {
        if (err) {
            console.error(err);
            return res.status(500).json({message: err.message});
        }
        res.json(comments);
    });
});

// add comment
app.post("/api/comments", function(req, res) {
    comments.add(req.body, function(err, comment) {
        if (err) {
            console.error(err);
            return res.status(500).json({message: err.message});
        }
        res.json(comment);
    });
});

// start server
app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});
