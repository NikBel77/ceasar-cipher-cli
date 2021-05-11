const CLI = require('./CLI')
const { pipeline } = require('stream')
const streams = require('./streams')
const validateArguments = require('./validate')

let cliConfig

try {
    const cli = new CLI()
    cliConfig = cli.config
    validateArguments(cliConfig)
} catch (err) {
    process.stderr.write(err.message + '\n')
    process.exit(1)
}

const readStream = streams.createReadStream(cliConfig.input || '')
const writeStream = streams.createWriteStream(cliConfig.output || '')
const transformStream = streams
    .createTransformStream(cliConfig.shift, cliConfig.action)

// Main pipeline
pipeline(
    readStream,
    transformStream,
    writeStream,
    (err) => {
        if(err) {
            process.stderr.write(err)
        }
    }
)
