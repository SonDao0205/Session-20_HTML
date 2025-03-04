let a = +prompt("Nhap so a")
let b = +prompt("Nhap so b")
if(isNaN(a)||isNaN(b)){
    document.write(`Khong hop le`)
}
else{
    let sum = 1;
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            sum *= a
        }
    }
    else{
        for (let i = 0; i < Math.abs(b); i++) {
            sum *= a
        }
        sum = 1/sum
    }
    document.write(sum)
}