function formatmoneyToShort(money){
    let denom = ["","K","M","B"];
    let count =0;

    while (money >=1000 && count < denom.length - 1 ){
        money /=1000;
        count ++;
    }
    const format =money.toFixed(2).replace(/\.?0+$/, '');
    return `${format}${denom[count]}`;
}

console.log(formatmoneyToShort(1000));
console.log(formatmoneyToShort(1123400000));
console.log(formatmoneyToShort(1342222));