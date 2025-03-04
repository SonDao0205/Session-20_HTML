let str = prompt("Nhap chuoi")
let search = prompt("Nhap tu can tim kiem")
let flag = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] == search) {
        document.write(`Ton tai tu can tim kiem`)
        flag = 1;
        break
    }
}
if (flag === 0) {
    document.write(`Khong ton tai tu can tim kiem`)   
}
