const path = require('path')
const fs = require('fs')

module.exports = function validateArguments(cliConfig) {
    if(!cliConfig.shift)
        throw Error(`expected --shift (-s) argument`)
    if(!cliConfig.action)
        throw Error(`expected --action (-a) argument`)
    
    const shift = parseInt(cliConfig.shift)
    if(!shift) throw Error(`the \'shift\' argument must be a number`)

    const action = cliConfig.action
    if(action !== 'encode' && action !== 'decode')
        throw Error(`the \'action\' argument must be encode or decode`)

    if(cliConfig.input) {
        const file = path.join(__dirname, cliConfig.input)
        if(!fs.existsSync(file)) throw Error(`file \'${cliConfig.input}\' does not exist`)
    }

    if(cliConfig.output) {
        const file = path.join(__dirname, cliConfig.output)
        if(!fs.existsSync(file)) throw Error(`file \'${cliConfig.output}\' does not exist`)
    }
}