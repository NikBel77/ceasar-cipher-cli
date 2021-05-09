const cliArguments = {
    action: ['--action', '-a'],
    shift: ['--shift', '-s'],
    output: ['--output', '-o'],
    input: ['--input', '-i'],
}

module.exports = class CLI {
    constructor() {
        this.argv = process.argv.filter((_, i) => i >= 2)
        this.cliConfig = this.parseArgv(this.argv)
    }

    parseArgv(argv) {
        const cliParams = {}
        const usedArgumentIndices = []
        argv.forEach((arg, i) => {
            Object.keys(cliArguments).forEach((argument) => {
                if(usedArgumentIndices.some(ind => ind === i)) return
                
                if(cliArguments[argument].some(flag => flag === arg)) {
                    if(cliParams[argument])
                        throw Error(`duplicate argument: ${argument}`)

                    cliParams[argument] = argv[i + 1]
                    usedArgumentIndices.push(i + 1)
                }
            })
        })
        return cliParams
    }

    get config() {
        return this.cliConfig
    }
}