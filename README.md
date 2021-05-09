# Ceasar Cipher Cli Tool

### Usage
`ceasar-cipher.js` is main project file

support cli arguments:
-s, --shift: number (required)
-a, --action: 'encode' | 'decode' (required)
-i, --input: relative path to input file
-o, --output: relative path to output file

use `node ceasar-cipher -a encode -s { your shift as number }` - for encrypt.

and `node ceasar-cipher -a decode -s { your shift as number }` - for decipher.

without the output and input flags, the text will be output to the console.

for input to file
`node ceasar-cipher -a encode -s 10 --input input.txt`

for output to file
`node ceasar-cipher -a encode -s 10 --output output.txt`

for both cases
`node ceasar-cipher -a encode -s 10 -o output.txt -i input.txt`

the order of the arguments is not important.
if you want to use input or output arguments make sure the files you are passing as parameters exist.

Happy encryption!