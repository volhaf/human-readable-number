
module.exports = function toReadable (number) {
    const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    function NumberToArray(number) {
        let array = [];
        do {
            array.push(number % 10);
            number = Math.floor(number / 10);
        } while(number > 0);

        return array.reverse();
    };

    const digits = NumberToArray(number);

    switch(digits.length) {
        case 1: // 0-9 
            return first[digits[0]]; 
        case 2: // 10-99 
            if (digits[0] === 1) { //10-19
                return second[digits[1]];
            } else if (digits[1] === 0) {// dozens
                return dozens[digits[0]];
            } else if (digits[1] > 0) { //21-99,except for dozens
                return (`${dozens[digits[0]]} ${first[digits[1]]}`);
            }
        case 3: // 100-999
            let rem = number - 100 * digits[0];
            let result= `${first[digits[0]]} hundred`;

            if (rem === 0) {
                return result;
            } else {
                return `${result} ${toReadable(rem)}`
            };
    }
}






