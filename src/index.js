const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const decodedBits = expr.match(/(\d{10})|(\D{10})/gi)
    const morse = decodedBits.reduce((acc, value) => {
       let bitsDecoder = value.replace(/\D{10}/g, "").replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "")
        return `${acc} ${bitsDecoder}`
    }, "")
    
    const decodedWords = morse.split(' ').reduce((acc, value) => {
        for(let [keys, values] of Object.entries(MORSE_TABLE)){
            if (value === keys){
                acc = `${acc}${values}`
            } 
        }
        acc = value === "" ? `${acc} ` : acc
        return acc
    }, "")
    console.log(decodedWords);
    return decodedWords.trim()
}

module.exports = {
    decode
}