console.log("login.js is loaded");


const userLogin = {
  userName: "octocat_rules",
  password: "abacadabra"
};

let passwordInput;

let loggedIn = false;

while (!loggedIn){
	passwordInput = prompt(`Enter password for user ${userLogin.userName}.`)
	if (passwordInput === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}