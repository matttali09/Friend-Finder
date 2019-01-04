// create the submit fucntion that will grab the data and reset the survey
$(".submit").on("click", function (event) {
    event.preventDefault();
    console.log($("#friend-name").val());
    console.log($("#friend-age").val());
    console.log($("#friend-gender").val());
    console.log($("#friend-FB").val());
    // add logic for required fields
    if ($("#friend-name").val() != null && $("#friend-age").val() != null && $("#friend-gender").val() != null && $("#friend-FB").val() != null) {
        // create array for answersArray value can be stored
        var array = [];
        var i = 1;
        while ($("#ans" + i + "").val() != null) {
            array.push($("#ans" + i + "").val());
            i++;
        };
        console.log(array);


        // Here we grab the form elements
        var newFriend = {
            friendName: $("#friend-name").val().trim(),
            friendAge: $("#friend-age").val().trim(),
            friendGender: $("#friend-gender").val().trim(),
            friendFB: $("#friend-FB").val().trim(),
            answerArray: array
        };

        console.log(newFriend);


        $.post("/api/friends", newFriend,
            function (data) {

                alert("Thank You for Adding Your Friendly Face to Our Database :)!");

                // Clear the form when submitting
                $("#friend-name").val("");
                $("#friend-age").val("");
                $("#friend-gender").val("");
                // need to reset i back to 1 from previous time we used it
                i = 1;
                while ($("#ans" + i + "").val() != null) {
                    $("#ans" + i + "").val("1");
                    i++;
                };
                // do a redirect
                location.assign("/");

            });
    }
    else {
        alert("Please Fill Out the Required Fields Friend! (*)")
    }
});
