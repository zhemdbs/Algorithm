const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function solution(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if(str[i] === ' ') {
      result = result + ' ';
      // console.log(result)
    } else if(str[i] == str[i].toLowerCase()) {
      // console.log(str[i], ALPHABET[i], ALPHABET.length - 1 - [i])
      result = result + ALPHABET[ALPHABET.length - 1 - ALPHABET.indexOf(str[i])];
    } else {
      result = result + ALPHABET[ALPHABET.length - 1 - ALPHABET.indexOf(str[i].toLowerCase())].toUpperCase();
    }
  }
  
  console.log(result)
}

solution("R dzmg gl vzg ggvlpylppr"); 
// "I want to eat tteokbokki"
solution("Xzgh ziv xfgv"); 
// "Cats are cute"