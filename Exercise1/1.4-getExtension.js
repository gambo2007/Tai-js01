function getExtens(str){
    split = str.split(".");
    return split[1];
}
console.log(getExtens("image.png"));
console.log(getExtens("Sound.mp3"));