const stringEvaluator = (mathsString) => {
  if (mathsString.length < 5) {
    let resultsArray = [];
    resultsArray.push(mathsString);
    resultsArray.push(parseFloat(mathsString));
    return resultsArray;
  } else {
    let firstElement = parseFloat(mathsString[0]);
    let secondElement = parseFloat(mathsString[4]);
    return [mathsString, parseFloat(firstElement + secondElement)];
  }
}

module.exports = stringEvaluator;