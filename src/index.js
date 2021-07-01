const NUM_LIBRARY = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty'
  }

module.exports = function toReadable (number) {
    if (number == 0) return 'zero';
    else if (number < 100) return decades(number).trim();
    else {
        let hundreds = Math.floor(number / 100);
        number = number - hundreds * 100;
        return `${NUM_LIBRARY[hundreds]} hundred ${decades(number)}`.trim()
  }
}

function decades(number) {
    let tens = Math.floor(number / 10);
    let ones = number % 10;
    return number < 20 ? NUM_LIBRARY[number] : 
        tens < 6 ? `${NUM_LIBRARY[tens * 10]} ${NUM_LIBRARY[ones]}` : 
        tens == 8 ? `${NUM_LIBRARY[tens]}y ${NUM_LIBRARY[ones]}` :
        `${NUM_LIBRARY[tens]}ty ${NUM_LIBRARY[ones]}`
}