const stringEvaluator = require('./stringEvaluator');

describe('stringEvaluator', () => {
  it('returns a single element correctly', () => {
    expect(stringEvaluator("1")).toEqual(["1", 1.0])
  })
}) 