function getRandomEArray(arr){
    if (arr.length === 0){
        return undefined;
    }
    const rndArray = Math.floor(Math.random() * arr.length);
    return arr[rndArray];
}

console.log(getRandomEArray([2,3,4,5,6,7]));