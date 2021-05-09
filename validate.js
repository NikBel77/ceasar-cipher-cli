module.exports = function validateArguments(cliConfig) {
    if(!cliConfig.shift)
        throw Error(`expected --shift (-s) argument`)
    if(!cliConfig.action)
        throw Error(`expected --action (-a) argument`)
    
    const shift = parseInt(cliConfig.shift)
    if(!shift) throw Error(`argument shift must be a number`)

    const action = cliConfig.action
    if(action !== 'encode' && action !== 'decode')
        throw Error(`argument action must be encode or decode`)
}