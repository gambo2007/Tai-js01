// Trường hop min va max la nguyen duong
function randomB2Number(min,max){
    return Math.floor(Math.random()*(max-min +1)) + min;
}

// Trường hợp min va max nguyen âm hoac thap phan
function random2(min,max){
    min = Math.ceil(min);
    max = Math.round(max);
    return Math.floor(Math.random()*(max-min +1)) + min;
}
console.log(randomB2Number(1,25))
console.log(randomB2Number(1,25))