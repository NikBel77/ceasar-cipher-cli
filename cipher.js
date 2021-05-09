const charRange = {
    min: 'a'.charCodeAt(0),
    max: 'z'.charCodeAt(0)
}

const alpthabetLength = (charRange.max - charRange.min) + 1

function isLatinChar(charCode) {
    if (charCode >= charRange.min
        && charCode <= charRange.max) {
        return true
    }
    return false
}

function calculateRelativeShift(charCode, shift) {
    const actualShift = shift % alpthabetLength

    if ((charCode + actualShift) > charRange.max) {

        relativeShift = (charRange.min + actualShift - charRange.max - 1)
        return relativeShift
    } else if ((charCode + actualShift) < charRange.min) {

        relativeShift =  (-charRange.min + actualShift + charRange.max + 1)
        return relativeShift
    }
    return actualShift
}

function transformChar(shift, char) {
    const lowerCaseCode = char.toLowerCase().charCodeAt(0)
    if (!isLatinChar(lowerCaseCode))
        return char

    const relativeShift = calculateRelativeShift(lowerCaseCode, shift)
    const charCode = char.charCodeAt(0)
    return String.fromCharCode(charCode + relativeShift)
}

function transform(string, shift) {
    return string
        .split('')
        .map(transformChar.bind(null, shift))
        .join('')
}

module.exports = {
    encode: (string, shift) => transform(string, shift),
    decode: (string, shift) => transform(string, (shift * -1))
}