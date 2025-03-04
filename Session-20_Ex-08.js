let number = +prompt("Nhap 1 so:");
let prime = 1;
let count = 0;
let num = 2
let primeNumber = "";
if (number < 0 || isNaN(number)) {
    document.write(`Khong hop le`)
} else {
    while (count < number) {
        let prime = 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                prime = 0;
                break;
            }
        }
        if (prime === 1) {
            primeNumber += num + " ";
            count++;
        }
        num++;
    }
    document.write(primeNumber);
}