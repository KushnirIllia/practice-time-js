let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getRandom(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

console.log(getRandom(hands));