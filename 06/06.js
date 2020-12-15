
var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");

Array.prototype.displayItems = function() {
	for(i=0;i<this.length;i++) {
		document.write(this[i] + "\n");
	}
}

students.displayItems();

