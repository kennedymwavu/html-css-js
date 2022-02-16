// a simple for-loop to print the numbers 0 to 4:
for (let i = 0; i <=4; i++) {
    console.log(i);
}

// multiply numbers 0 to 4 with 2:
for (let i = 0; i <= 4; i++) {
    console.log(i * 2);
}

// `i` is not defined outside the for loop:
// console.log(i); ReferenceError: i is not defined

// but with var:
for (var i = 0; i < 5; i++) {
    console.log(i * 2);
}

console.log("The last value of i is:", i);

