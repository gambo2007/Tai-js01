function IntToRomanNumber(num) {
    if (num <= 0 || num >= 1000) {
        return undefined;
    }

    const ListOfRomanNumber = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    ];

    const units = num % 10;
    const tens = Math.floor((num % 100) / 10);
    const hundreds = Math.floor(num / 100);

    const romanNumber =
        ListOfRomanNumber[2][hundreds] +
        ListOfRomanNumber[1][tens] +
        ListOfRomanNumber[0][units];

    return romanNumber;
}

console.log(IntToRomanNumber(5)); 
