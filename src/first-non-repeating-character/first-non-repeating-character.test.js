import { firstNonRepeatingLetter, firstNonRepeatingLetterBesterPratice } from './first-non-repeating-character'
describe('first Non-Repeating Letter', ()=>{
    test("Should return t ", () => {
        const str = 'sstaa'
        const exp = 't'
      expect(firstNonRepeatingLetter(str)).toEqual(exp)
      })
      test("Should return S UpperCase ", () => {
        const str = 'STtaa'
        const exp = 'S'
      expect(firstNonRepeatingLetter(str)).toEqual(exp)
      })
      test("Should return t in word stress ", () => {
        const str = 'stress'
        const exp = 't'
      expect(firstNonRepeatingLetter(str)).toEqual(exp)
      })
      test("should handle empty strings", () => {
        const str = ''
        const exp = ''
      expect(firstNonRepeatingLetter(str)).toEqual(exp)
      })
      test("should handle all repeating strings", () => {
        const str = 'mmoonn'
        const exp = ''
      expect(firstNonRepeatingLetter(str)).toEqual(exp)
      })
      //best pratice
      test("Should return t ", () => {
        const str = 'sstaa'
        const exp = 't'
      expect(firstNonRepeatingLetterBesterPratice(str)).toEqual(exp)
      })
      test("Should return S UpperCase ", () => {
        const str = 'STtaa'
        const exp = 'S'
      expect(firstNonRepeatingLetterBesterPratice(str)).toEqual(exp)
      })

      test("Should return t in word stress ", () => {
        const str = 'stress'
        const exp = 't'
      expect(firstNonRepeatingLetterBesterPratice(str)).toEqual(exp)
      })
      test("should handle empty strings", () => {
        const str = ''
        const exp = ''
      expect(firstNonRepeatingLetterBesterPratice(str)).toEqual(exp)
      })
      test("should handle all repeating strings", () => {
        const str = 'mmoonn'
        const exp = ''
      expect(firstNonRepeatingLetterBesterPratice(str)).toEqual(exp)
      })
})

