let generatedAleatoryNumber = (quantity, minNumber, maxNumber) => {
  let generatedNumbers = [];
  while (generatedNumbers.length < quantity) {
    let numberAleatory = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    );
    !generatedNumbers.includes(numberAleatory)
      ? generatedNumbers.push(numberAleatory)
      : ``;
  }
  return generatedNumbers;
};

let array = generatedAleatoryNumber(7, 1, 100);
console.log(array);