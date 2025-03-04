let num = prompt("Nhap so bat ki")
let temp = ""
for(let i = num.length-1; i >= 0;i--){
    temp += num[i]
}
if (isNaN(num)){
    document.write(`So khong hop le`)
}
else if (num == temp) {
    document.write(`${num} la so doi xung`)
}
else{
    document.write(`${num} Khong phai la so doi xung`)
}
