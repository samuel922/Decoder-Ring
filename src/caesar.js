// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //Define a empty array to hold the final results
    let result = []
    input = input.toLowerCase().split('')
    if (encode) {
      input.forEach(charr => {
        if (alphabet.includes(charr)) {
          alphabet.find((letter, index) => {
            if (letter === charr) {
              let newIndex = index + shift
              if (newIndex < 0) newIndex += 26
              if (newIndex > 25) newIndex -= 26
              let newCharr = alphabet[newIndex]
              result.push(newCharr)
            }
          })
        } else {
          result.push(charr)
        }
      })
    } else {
      input.forEach(charr => {
        if (alphabet.includes(charr)) {
          alphabet.find((letter, index) => {
            if (letter === charr) {
              let newIndex = index - shift
              if (newIndex < 0) newIndex += 26
              if (newIndex > 25) newIndex -= 26
              let newCharr = alphabet[newIndex]
              result.push(newCharr)
            }
          })
        } else {
          result.push(charr)
        }
      })
    }
    return result.join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
