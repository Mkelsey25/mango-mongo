
$(document).ready(function() {
//Button click to pull articles in
$(".btn").on("click", function() {
    event.preventDefault();
    //console.log("Button was clicked");
    $.ajax({
        url: "articles",
        type: "GET",
        success: function(data) {
            console.log(data);
            for(var i = 0; i < 5; i++) {
                $("#content").append("Title: " + data[i].title + " <a href='/saved'><button id="  + data[i]._id +"class='saveArticle'>Save Article</button></a>" + "<br>");
                $("#content").append("URL: " + data[i].url + "<br>");
                $("#content").append("Summary: " + data[i].summary + "<br>");
            };

            //console.log("TITLE: " + data[0].title);
            
        }
    })
})
//button click to save an article
$(".saveArticle").on("click", function() {
    var id = $(this).attr('id');
    console.log(id);
    event.preventDefault();
    $.ajax({
        url:"saved",
        type: "GET",
        success: function(data) {
            console.log(data);
            //data=$(data).find("_id =" + id);
        }
    })
})

});




/*$(function() {


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
$("#theContextPlaceholder").html(theCompiledHtml);
//Block Helper Function 
//Ability to reuse code that will be executed at various points in the application
});*/


