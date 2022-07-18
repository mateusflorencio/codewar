import { CalculatorOne } from './calculation-with-functions'

const calcOne = new CalculatorOne()
describe("Calculator", () => {
  test("Calculator One", () => {
  expect(calcOne.seven(calcOne.times(calcOne.five()))).toEqual(35)
  expect(calcOne.four(calcOne.plus(calcOne.nine()))).toEqual(13)
  expect(calcOne.eight(calcOne.minus(calcOne.three()))).toEqual(5)
  expect(calcOne.six(calcOne.dividedBy(calcOne.two()))).toEqual(3)
  })
})

