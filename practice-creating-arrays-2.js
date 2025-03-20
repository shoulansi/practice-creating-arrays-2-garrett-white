let helloArr = Array(7);
let filledHelloArr = helloArr.fill('Hello');
console.log(filledHelloArr);

filledHelloArr.fill("hey", 3, 6);
console.log(filledHelloArr);

let loopArr = Array(5);

for(let i = 0; i < loopArr.length; i++) {
    loopArr[i] = i * 10;
}

console.log(loopArr);