let eventotal = 0;
let firstNum = 1;
let nextNum = 1;
let evenArr = [];
let nextFib = firstNum + nextNum;

while (nextFib < 4000000) {

    if (nextFib % 2 === 0) {
        evenArr.push(nextFib);
    };
    firstNum = nextNum;
    nextNum = nextFib;
    nextFib = firstNum + nextNum;
}

console.log(evenArr)

for (let i = 0, a = evenArr.length; i < a; i++) {
    eventotal += evenArr[i];   
}

console.log(eventotal);