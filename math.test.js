const { add, multiply } = require('./math')

test('run the tests', () => {
  expect(false).toBeFalsy()
})

test('should add two numbers', () => {
  // Arrange: set up the world
  const valueA = 2
  const valueB = 2

  // Act: execute the System under the Test (math.js)
  const sum = add(2, 2)

  // Assert: check for correct results
  expect(sum).toBe(4)
  expect(add(1, 3)).toBe(4)
  expect(add(-4, -5)).toBe(-9)
})

test('multiply()', () => {

  it('should multiply two numbers', () => {

    expect(multiply(4, 2)).toBe(8)
  })

})
