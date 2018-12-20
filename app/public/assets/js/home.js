// initialize user name string and chosen boolean
var userName;
var chosen = false;
// create a submit function that captures the user name and removes the input field so it cannot be used again unless refreshed and also empties the friendsList so the query can be run again without repeat results
$(".submit").click(function () {
    userName = $("#user-name").val().trim();
    chosen = true;
    $("#friendList").empty();
    $("#userInfo").empty();
    runFriendsQuery();
});



// function fro the ajax method to populate the fields.
function runFriendsQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/friends", method: "GET" })
        .then(function (friendData) {

            // Here we then log the friendData to console, where it will show up as an object.
            console.log(friendData);
            console.log("------------------------------------");

            // Loop through and display each of the customers
            for (var i = 0; i < friendData.length; i++) {

                // Get a reference to the friendsList element and populate it with friends or the user if friendName = UserName
                var friendsList = $("#friendList");
                var userNameCard = $("#userInfo");

                // setup a userArray for compatability score checks use for loop to get the userArray even if its not the first person in the friendData array.
                for (var j = 0; j < friendData.length; j++) {
                    if (userName === friendData[j].friendName) {
                        var userArray = friendData[j].answerArray
                    }
                }

                // set up a compatability score
                var compatabilityScore;
                if (chosen) {
                    // initialize compatability score as 0;
                    compatabilityScore = 0;
                    // loop through bouth arrays and add one for every answer that is the same
                    for (var j = 0; j < friendData[i].answerArray.length; j++) {
                        if (friendData[i].answerArray[j] === userArray[j]) {
                            compatabilityScore++;
                        }
                    }
                    // round and put into percent style and round
                    compatabilityScore = Math.round(compatabilityScore / 12 * 100);
                }

                // Then display the fields in the HTML
                var listItem = $("<li class='card list-group-item text-center mt-4 mb-5'>");

                // if userName personalize message
                if (friendData[i].friendName === userName) {
                    listItem.append(
                        $("<h2>").text("Friends Name: " + friendData[i].friendName),
                        $("<hr>"),
                        $("<h2>").text("Age: " + friendData[i].friendAge),
                        $("<h2>").text("Gender: " + friendData[i].friendGender),

                        $("<h2>").html("<h2 style='border-bottom: none'>You have a high compatability score with Yourself: " + compatabilityScore + "% <span> <i class='fa fa-gratipay'></i></span> </h2>"),
                        $("<br>"),
                        $("<h2>").text("Become freinds with Yourself on FaceBook Because you're awesome: "),
                        $("<h2>").html("<a href=" + friendData[i].friendFB + " target='blank'>" + friendData[i].friendFB + "</a>")
                    );
                }
                // if compatability score higher than 60 show facebook connect info               
                else if (compatabilityScore >= 60) {
                    listItem.append(
                        $("<h2>").text("Friends Name: " + friendData[i].friendName),
                        $("<hr>"),
                        $("<h2>").text("Age: " + friendData[i].friendAge),
                        $("<h2>").text("Gender: " + friendData[i].friendGender),

                        $("<h2>").html("<h2 style='border-bottom: none'>You have a high compatability score with this person: " + compatabilityScore + "% <span> <i class='fa fa-gratipay'></i></span> </h2>"),
                        $("<br>"),
                        $("<h2>").text("Become freinds with them on facebook at: "),
                        $("<h2>").html("<a href=" + friendData[i].friendFB + " target='blank'>" + friendData[i].friendFB + "</a>")
                    );
                }
                // compatability score logic only shows compatability score if there is one.
                else if (compatabilityScore != null) {
                    listItem.append(
                        $("<h2>").text("Friends Name: " + friendData[i].friendName),
                        $("<hr>"),
                        $("<h2>").text("Age: " + friendData[i].friendAge),
                        $("<h2>").text("Gender: " + friendData[i].friendGender),

                        $("<h2>").text("Compatability score: " + compatabilityScore + "%")
                    );
                }
                // run if survey hasn't been taken yet
                else {
                    listItem.append(
                        $("<h2>").text("Friends Name: " + friendData[i].friendName),
                        $("<hr>"),
                        $("<h2>").text("Age: " + friendData[i].friendAge),
                        $("<h2>").text("Gender: " + friendData[i].friendGender),

                        $("<h2>").text("Take the quiz to check your compatability with others.")
                    );
                }
                // if username has been collected and is available it will be added to the userName section.
                if (friendData[i].friendName === userName) {
                    userNameCard.append(listItem);
                }
                else {
                    friendsList.append(listItem);
                }
            }
        });
}



// This function resets all of the data in our tables. This is intended to let you restart a demo.
function clearUser() {
    alert("Clearing...");

    // Clear the current user from the server and then empty the User element on the client
    $.ajax({ url: "/api/clear", method: "POST" }).then(function () {
        $("#UserInfo").empty();
    });
}

$("#clear").on("click", clearUser);


// Run Queries!
// ==========================================
runFriendsQuery();
