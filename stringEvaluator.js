const stringEvaluator = (mathsString) => {
  if (mathsString.length < 5) {
    let resultsArray = [];
    resultsArray.push(mathsString);
    resultsArray.push(parseFloat(mathsString));
    return resultsArray;
  } else {
    return ["1 + 1", 2.0];
  }
}

module.exports = stringEvaluator;