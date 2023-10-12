// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(eStr) {
  let decoded = " "; // Your Result goes here
  // Only change code below this line
   for(var i =0;i<eStr.length;i++){
	var asciiNum = eStr[i].charCodeAt();
	   decoded += lookup[char] || char;
   }
  return decoded; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
const encodedString = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT";
const decodedString = rot13(encodedString);
console.log(decodedString);
