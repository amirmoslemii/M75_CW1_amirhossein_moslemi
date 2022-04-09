const sentence = "Cras mattis consectetur purus sit amet fermentum"
let inputUser = prompt("enter word")
let wordSplit = sentence.split(' ')
let findWord = wordSplit.find((arry) => {
    return arry === inputUser
})

findWord === undefined ? console.log(false) : console.log(true);