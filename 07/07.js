
var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");

Array.prototype.displayItems = function() {
	for(i=0;i<this.length;i++) {
		console.log(this[i] + "\n");
	}
}

students.displayItems();

console.log("The number of items in students array is " + students.length);

console.log("The SORTED students array");
students.sort();
students.displayItems();


console.log("The REVERSED students array");
students.reverse();
students.displayItems();


console.log("The students array after REMOVING THE LAST item");
students.pop();
students.displayItems();


console.log("The students array after PUSH");
students.push("New Stuff");
students.displayItems();

console.log("\n\n");


