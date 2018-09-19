var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();
var axios = require("axios");
var db = require("./models");
var PORT = 3000;
var logger = require("morgan");
var cheerio = require("cheerio");
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
//Heroku Set-up
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, function(){
    console.log("I'm connected to something, but I'm not sure what that is really...");
});

//Set up Handlebars engine

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//scraping 

app.get("/scrape", function(req, res) {
    axios.get('https://www.mango.org/blog/').then(function(response) {
       
        var $ = cheerio.load(response.data);
       // console.log(response.data);
        $("div .eg-balloon-blog-layout-1-content").each(function(i, article) {
            //console.log(this);
            var result = {};
            result.title = $(this).find("div").children("a").html();

            //result.summary = $(this).children("div .esg-entry-content eg-balloon-blog-layout-1-content-element-6").text();
            //result.link = $(this).children("a .esg-entry-content eg-balloon-blog-layout-1-content-element-1").attr("href");
            
            console.log(result);

          db.articles.create(result)
          .then(function(newArticle) {
              //console.log( "NEW ARTICLE: " + newArticle);
          })
          .catch(function(err) {
              //return res.json(err);
          });
        });

        res.send("scraping was successful.");
    });
});

app.get("/articles", function(res, req) {
    db.articles.find({}).then(function(newArticle) {
        res.json(newArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

app.get("articles/:id", function(req,res) {
    db.articles.findOne({_id: req.params.id})
    .populate("note").then(function(newArticle) {
        res.json(newArticle);
    }).catch(function(err) {
        res.json(err);
    })
})

app.post("/articles/:id", function(req,res) {
    db.notes.create(req.body).then(function(newNote) {
        return db.articles.findOneAndUpdate({ _id: req.params.id }, { note: newNote._id }, { new: true });
    }).then(function(newArticle) {
        res.json(newArticle);
    }).catch(function(err) {
        res.json(err);
    });
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  






