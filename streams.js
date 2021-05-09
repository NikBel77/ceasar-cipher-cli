const { Transform } = require('stream')
const path = require('path')
const fs = require('fs')
const cipher = require('./cipher')

function createTransformStream(shift, action = 'encode') {
    return new Transform({
        transform(chunk, _, cb) {
            cb(null, cipher[action](chunk.toString(), shift))
        }
    });
}

function createReadStream(pathToFile = '') {
    if(!pathToFile) return process.stdin
    const file = path.join(__dirname, pathToFile)
    if(!fs.existsSync(file)) return process.stdin

    return fs.createReadStream(file)
}

function createWriteStream(pathToFile = '') {
    if(!pathToFile) return process.stdout
    const file = path.join(__dirname, pathToFile)
    if(!fs.existsSync(file)) return process.stdout

    return fs.createWriteStream(file, { flags: 'a' })
}

module.exports = {
    createReadStream,
    createTransformStream,
    createWriteStream,
}