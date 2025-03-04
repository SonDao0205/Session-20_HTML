let number = +prompt("Nhap 1 so:");
let prime = 1;

if (number < 2) {
    prime = 0;
} else {
    for (let j = 2; j <= Math.sqrt(number); j++) {
        if (number % j === 0) {
            prime = 0;
            break;
        }
    }
}

if (prime === 1) {
    document.write(`${number} la so nguyen to`);
} else {
    document.write(`${number} khong phai la so nguyen to`);
}
