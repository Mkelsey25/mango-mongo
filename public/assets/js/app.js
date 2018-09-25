

$(document).ready(function() {
var savedArticles = [];
$(".btn").on("click", function() {
    //console.log("Button was clicked");
    $.ajax({
        url: "articles",
        type: "GET",
        success: function(data) {
           // console.log(data);

            for(var i = 0; i < 5; i++) {
                if(data[i].saved === false) {
                $("#content").append("Title: " + data[i].title + "<button id="  + data[i]._id + " class='saveArticle'>Save Article</button>" + "<br>");
                $("#content").append("URL: " + data[i].url + "<br>");
                $("#content").append("Summary: " + data[i].summary + "<br>");
                }
            };

            //console.log("TITLE: " + data[0].title);
            
        }
    })
})
//button click to save an article
$(document).on("click", ".saveArticle", function() {

    //console.log("Button was clicked!!")
    //console.log(this);
    var id = $(this).attr('id');
    //console.log(id);
    
    $.ajax({
        url:"articles",
        type: "GET",
        success: function(data) {
            //console.log(data);
            //console.log(data[0]);
            
            for(var j = 0; j < 5; j++) {
                if(data[j]._id === id) {
                    console.log("Before: " + data[j].saved);
                    data[j].saved = true;
                    var articleToBeSaved = data[j]
                    console.log("After: " + articleToBeSaved.saved);
                    savedArticles.push(articleToBeSaved);
                    
                    $("#saved").append(articleToBeSaved.title + "<br>");
                    $("#saved").append(articleToBeSaved.url + "<br>");
                    $("#saved").append(articleToBeSaved.summary + "<br>");
                    $("#" + id).remove();
                }
                else {
                    //console.log("I don't think you're ready for this jelly.");
                }
               // console.log(savedArticles);
            };
            //console.log(savedArticles);
        }
    });
       // console.log(savedArticles[0]);
         
    

});







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


