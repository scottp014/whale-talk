var input = 'i like a textured fuzzy synthesizer sound when i listen to ambient music';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(`input is ${i}.`);
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }

    for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      // console.log(input[i])
      resultArray.push(input[i])
    }
    // console.log(`j is ${j}.`);
  }
}

var resultString = resultArray.join('').toUpperCase();
console.log(resultString);
// console.log(resultArray);
