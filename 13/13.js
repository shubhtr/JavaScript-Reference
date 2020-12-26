//if...else if...else
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter the first number: ', function(one) {
	rl.question('Enter the second number: ', function(two){
		if (one == two)
			console.log(one + " is equal to " + two + ".");
		else if (one < two)
			console.log(one + " is less than " + two + ".");
		else
			console.log(one + " is greater than " + two + ".");
	});
});

rl.on("close", function() {
	console.log("\nExiting...");
	process.exit(0);
});

