//loops - while
console.log("using while loops");

var i=0,j=1,k;

console.log("fibonacci series less than 40");

while(i<40) {
	console.log(i);
	k = i + j;
	i = j;
	j = k;
}

