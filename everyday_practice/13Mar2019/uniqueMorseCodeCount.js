const morseCode = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
]

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
var uniqueMorseRepresentatios = function(words) {
  let morseObj = {}

  words.forEach(word => {
    let currMorse = []

    word.split("").forEach(letter => {
      let index = alphabet.indexOf(letter)
      currMorse.push(morseCode[index])
    })
    let completedMorse = currMorse.join("")
    console.log(completedMorse)
    if (!morseObj[completedMorse]) {
      morseObj[completedMorse] = 1
    } else {
      morseObj[completedMorse] += 1
    }
  })

  return Object.keys(morseObj).length
}

//test
console.log(uniqueMorseRepresentatios(["gin", "zen", "gig", "msg"]))
