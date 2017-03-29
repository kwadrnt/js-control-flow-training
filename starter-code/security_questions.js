console.log("security_questions.js is loaded");

// ES5 old school JS!
var securityQuestions = [
	{
		question: "What is your favorite food?",
		expectedAnswer: "Chinese"
	},
	{
		question: "What is your birth city?",
		expectedAnswer: "Los Angeles"
	},
	{
		question: "What street did you grow up on?",
		expectedAnswer: "Eastern"
	}
]

var userAnswer = "";
var hacker = false;

for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect security question response!");
    hacker = true;
		break;
	}
}

if (hacker){
  console.log("Stop!");
}