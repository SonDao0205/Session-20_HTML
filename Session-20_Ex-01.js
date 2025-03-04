let number = +prompt("Nhap so bat ki")
if (number < 1 || !isFinite(number)) {
    document.write(`Du lieu nhap vao khong hop le`)
}
else{
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    document.write(sum)
}