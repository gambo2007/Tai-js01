function random2(min,max){
    min = Math.ceil(min);
    max = Math.round(max);
    return Math.floor(Math.random()*(max-min +1)) + min;
}
console.log(random(1,25))
console.log(random2(1,25))
