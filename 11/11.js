const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//if
rl.question('Please enter your age: ', (answer) => {
	
if (answer >= 18) {
	console.log("You are an adult.");
}
if (answer < 18) {
	console.log("You are NOT an adult.");
}

rl.close();

});

