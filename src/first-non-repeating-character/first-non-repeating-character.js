
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