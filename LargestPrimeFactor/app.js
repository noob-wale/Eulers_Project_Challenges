function largestPrimeFactor(number) {
    let divisor = 2;
    while (divisor <= number) {
        if (number % divisor === 0){
            number /= divisor;
        } else {
            divisor++;
        }
    }
    return divisor;
};

console.log(largestPrimeFactor(13195));