// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a few "dummy" friends.
// But you could have it be an empty array as well.
// ===============================================================================

var friendData = [
  {
    friendName: "Jessica",
    friendAge: "21",
    friendGender: "Female",
    answerArray: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2"]
  },
  {
    friendName: "Ahmed",
    friendAge: "22",
    friendGender: "Male",
    answerArray: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2"]
  },
  {
    friendName: "Grumpy Cat",
    friendAge: "15",
    friendGender: "Male",
    answerArray: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;