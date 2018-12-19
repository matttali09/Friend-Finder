// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a few "dummy" friends.
// But you could have it be an empty array as well.
// ===============================================================================

var friendData = [
  {
    friendName: "Shakira",
    friendAge: "21",
    friendGender: "Female",
    friendFB: "https://www.facebook.com/shakira/",
    answerArray: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "5", "5"],
  },
  {
    friendName: "Cristiano Ronaldo",
    friendAge: "22",
    friendGender: "Male",
    friendFB: "https://www.facebook.com/Cristiano/",
    answerArray: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2"],
  },
  {
    friendName: "Grumpy Cat",
    friendAge: "15",
    friendGender: "Male",
    friendFB: "https://www.facebook.com/TheOfficialGrumpyCat/?ref=br_rs",
    answerArray: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  },
  {
    friendName: "Will Smith",
    friendAge: "25",
    friendGender: "Male",
    friendFB: "https://www.facebook.com/Will-Smith-92304305160/",
    answerArray: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
  },
  {
    friendName: "Matthew Taliancich",
    friendAge: "25",
    friendGender: "Male",
    friendFB: "https://www.facebook.com/matt.taliancich",
    answerArray: ["3", "5", "4", "5", "5", "5", "3", "5", "3", "5", "5", "5"],
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;