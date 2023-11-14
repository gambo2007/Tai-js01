function integerToRoman(num) {
    if (num <= 0 || num >= 1000) {
        return undefined;
    }

    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    ];

    const units = num % 10;
    const tens = Math.floor((num % 100) / 10);
    const hundreds = Math.floor(num / 100);

    const romanNumeral =
        romanNumerals[2][hundreds] +
        romanNumerals[1][tens] +
        romanNumerals[0][units];

    return romanNumeral;
}

const num = 25;
const romanNumeral = integerToRoman(num);

console.log(romanNumeral); 
