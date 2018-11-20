var topics = ["flapjack", "totally spies", "teen titains", "dave the barbarian", "Foster's Home for Imaginary Friends", "regular show", "danny phantom", "fairly odd parents", "digimon", "yugioh"]

for (var i = 0; i < topics.length; i++) {

    $("#divforbuttons").append("<button>" + topics[i] + "</button>")

};

$("#addGif").on("click", function (e) {
    e.preventDefault();
    var cartoonName = $("#cartoonButton").val();
    console.log(cartoonName);
    topics.push(cartoonName);
    $("#divforbuttons").empty();
    console.log(topics);
    for (var i = 0; i < topics.length; i++) {
        $("#divforbuttons").append("<button>" + topics[i] + "</button>")
    };


    
})







$(document).on("click", "button", function () {

    var cartoon = $(this).text();
    console.log(cartoon);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon + "&api_key=7Ok8EeQzwrvBSD0j30NJFdbtQybGJMZj&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var result = response.data;
        console.log(result);

        $("#giffs").empty();
        for (var i = 0; i < result.length; i++) {


            $("#giffs").append("<img src='" + result[i].images.fixed_height_small_still.url + "' data-still='" + result[i].images.fixed_height_small_still.url + "'data-animate='" + result[i].images.fixed_height_small.url + "'data-state='still' class='gif'>" + "<p>Rating: " + result[i].rating + "</p><br><br>")
            

        };



    });



});





$(document).on("click", ".gif", function () {

    var state = $(this).attr("data-state");

    var animate = $(this).attr("data-animate")
    var still = $(this).attr("data-still")

    if (state === 'still') {
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
    }
});