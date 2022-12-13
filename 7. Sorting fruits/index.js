let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruits() {
	for (let index = 0; index < fruit.length; index++) {
		const element = fruit[index];
		if (element === "🍎") {
			appleShelf.textContent += element;
		} else {
			orangeShelf.textContent += element;
		}
	}
}
sortFruits();
