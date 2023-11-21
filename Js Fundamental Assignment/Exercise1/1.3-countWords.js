function countWords(words){
    let split = words.split(/(?=[A-Z])/);
    let count = split.length;
    return count;
}
console.log(countWords("oneTwoThree"))