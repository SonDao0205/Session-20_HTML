let number = +prompt("Nhap so bat ki")
if (number < 1 || !isFinite(number)) {
    document.write(`Du lieu nhap vao khong hop le`)
}
else{
    document.write(`Cac so chia het cho 5 tu 1 den ${number} la : `)
    for (let i = 1; i <= number; i++) {
        if (i % 5 == 0) {
            document.write(i,", ");        
        }
    }
}