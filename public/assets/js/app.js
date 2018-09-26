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
                    $("#content").append("Title: " + data[i].title + "<button id="  + data[i]._id + " class='saveArticle'>Save Article</button>" +  "<button id="  + data[i]._id + " class='deleteArticle'>Delete Article</button>" + "<br>");
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
                    
                    $("#saved").append("<form id='" + articleToBeSaved._id + "'> " + 
                   "<input id='" + articleToBeSaved._id + "' type='text'> " + "</form>" +
                    "<button" + " class='saveNote'" + " id='" + articleToBeSaved._id + "'>Create Note</button> " + "<button class='deleteArticle' id='" + articleToBeSaved._id + "'>Delete Button</button> "
                   + articleToBeSaved.title + "<br>");
                    $("#saved").append("<section id='" + articleToBeSaved._id + "'>" + articleToBeSaved.url + "<br>");
                    $("#saved").append(articleToBeSaved.summary + "<br>" +" <div id='" + articleToBeSaved._id + "'>" + "Note: </div>" + "</section>");
                    $(" button[#" + id + "]").remove();
                    
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



$(document).on("click", ".saveNote", function() {
    //console.log("OMG U CLICKED ME!");
    var btnId = $(this).attr("id");
    //console.log(btnId)
    var inputId = $("input[type=text][id=" + btnId + "]").val();
    console.log(inputId);
    $("div[id=" + btnId + "]").append("<h3 class='noteBody' id='" + btnId + "'>" + inputId + "</h3> " + "<button class='deleteNote' id='" + btnId + "'>Delete Note</button>");
    
});



$(document).on("click", ".deleteNote", function() {
    var btnId = $(this).attr("id");
    console.log("Wow did u rlly just click me?!?!");
    var noteToDelete = $("h3[id=" + btnId + "]");
    noteToDelete.remove();
    var buttonToDelete = $("button[class=deleteNote][id=" + btnId + "]");
    buttonToDelete.remove();
});

$(document).on("click", ".deleteArticle", function() {
    var btnId = $(this).attr("id");
    console.log("OUCH");
    var formToDelete = $("form[id=" + btnId + "]");
    formToDelete.remove();


});
/*$(document).on("click", ".deleteArticle", function() {
    var btnId = $(this).attr("id");
    console.log("Oooooo, do that again!");
    var formToDelete = $("form[id=" + btnId + "]");
    formToDelete.remove();
    var btnToDelete = $("button[id=" + btnId + "]");
    btnToDelete.remove();
    var articleToDelete = $("div[id=" + btnId + "]");
    articleToDelete.remove();
});*/


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


