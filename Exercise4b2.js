function readNumber(number) {
    if (number < 0 || number >= 1000000 || !Number.isInteger(number)) {
        return undefined;
    }

    const units = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

    let result = '';
    let Str = number.toString().padStart(6, '0');

    for (let i = 0; i < 6; i++) {
        console.log(Str[i]);
        const digit = parseInt(Str[i]);

        if (i === 0 && digit !== 0) {
            result += units[digit] + ' mươi ';
        } else if (i === 1 && digit !== 0) {
            result += units[digit] + ' vạn ';
        } else if (i === 2 && digit !== 0) {
            result += units[digit] + ' ngàn ';
        } else if (i === 3 && digit !== 0) {
            result += units[digit] + ' trăm ';
        } else if (i === 4) {
            if(digit === 0){
                result += units[digit] + 'linh' ;
            }else{
                result += units[digit] + ' mươi ';
            }
            
        } else if (i === 5 && digit !== 0) {
            result +=' '+ units[digit];
        }
    }

    return result.trim();
}

const number = 726503;
const vietnamese = readNumber(number);
console.log(vietnamese); 
