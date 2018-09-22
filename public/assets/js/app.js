/*var fs = require("fs");
var articles = require("../../../models/articles");

var articleTemplateScript = $("#article-template").html();
var theTemplate = Handlebars.compile(articleTemplateScript);
var context = {
    articleContext: [
        {"title": articles.title,
        "summary": articles.summary,
        "url": articles.url},
        {"title": articles.title,
        "summary": articles.summary,
        "url": articles.url},
        {"title": articles.title,
        "summary": articles.summary,
        "url": articles.url},
        {"title": articles.title,
        "summary": articles.summary,
        "url": articles.url}

    ] 


};

var theCompiledHtml = theTemplate(context);
$("#theContextPlaceholder").html(theCompiledHtml);*/
//Block Helper Function 
//Ability to reuse code that will be executed at various points in the application

