let n = +prompt("Nhap so n")
let num1 = 0
let num2 = 1
let total = 0
let str = ""

if (n < 2 || isNaN(n)) {
    document.write(`Khong hop le`)
} else {
    str +=num2 + " ";
    for (let i = 2; i <= n; i++) {
        total = num1 + num2;
        str += total + " ";
        num1 = num2;
        num2 = total;
    }
    document.write(str);
}
