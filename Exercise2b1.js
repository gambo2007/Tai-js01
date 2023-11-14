function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function combination(n, r) {
    if (r < 0 || r > n) {
        return 0;
    }

    const Numerator = factorial(n);
    const Denominator = factorial(r) * factorial(n - r);
    const result = Numerator / Denominator;
    return result;
}

console.log(combination(5,2));