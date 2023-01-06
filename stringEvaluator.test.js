const stringEvaluator = require('./stringEvaluator');

describe('stringEvaluator', () => {
  it('returns a single element correctly', () => {
    expect(stringEvaluator("1")).toEqual(["1", 1.0])
  })

  it('returns a single element correctly', () => {
    expect(stringEvaluator("43")).toEqual(["43", 43.0])
  })

  it('returns a single element correctly', () => {
    expect(stringEvaluator("3.5")).toEqual(["3.5", 3.5])
  })

  it('returns results for string with two elements correctly', () => {
    expect(stringEvaluator("1 + 1")).toEqual(["1 + 1", 2.0])
  })

  it('returns results for string with two elements correctly', () => {
    expect(stringEvaluator("3 + 4")).toEqual(["3 + 4", 7.0])
  })
}) 