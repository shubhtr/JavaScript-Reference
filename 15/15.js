//function with arguments
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var count=0;
var name;

function countVowels(name) {
	for (var i=0; i<name.length; i++){
		if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
			count = count + 1;
	}
	console.log("Hello " + name + "!!! Your name has " + count + " vowels.");
}

rl.question('Please enter your name: ', function(name){
	rl.close();
	countVowels(name);
});

