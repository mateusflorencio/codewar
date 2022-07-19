
// first resolution
export function firstNonRepeatingLetter(s) {
    const aux = s ? s
        .toLowerCase()
        .split('')
        .map((a, i, w) => {
            return  w.indexOf(a) === w.lastIndexOf(a) ? s[i] : ''
        }).join('')[0] : ''

    return aux ? aux : ''
}
// best pratice https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript
export function firstNonRepeatingLetterBesterPratice(s) {
    for(const i in s) {
        if(s.match(new RegExp(s[i],'gi')).length === 1) {
            return s[i]
        }
    }
    return ''
}