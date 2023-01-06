const stringEvaluator = (mathsString) => {
  let resultsArray = [];
  resultsArray.push(mathsString);
  resultsArray.push(parseFloat(mathsString));
  return resultsArray;
}

module.exports = stringEvaluator;