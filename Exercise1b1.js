function fomart(number) {
    let string = number.toString();
    let split = string.split(".");
    let wholePart = split[0];
    let output = "";

    let count = 0;
    for (let i = wholePart.length - 1; i >= 0; i--) {
        count++;
        output = wholePart[i] + output;
        if (count % 3 === 0 && i > 0) output = "," + output;
    }

    if (split.length === 2)
        return output + "." + split[1];
    return output;
}
console.log(fomart(1000.03));
