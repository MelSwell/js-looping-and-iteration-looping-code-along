function writeCards(arr, event) {
  const cards = []
  for (let i = 0; i < arr.length; i++) {
    cards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
  }
  return cards
}

function countDown(num) {
  while (num >= 0){
    console.log(num)
    num -= 1
  }
}
