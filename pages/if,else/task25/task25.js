let num = +prompt("3 xonali raqam kiriting");
let b = num % 100
let c = num % 10 //1 xona
let a = (num - b) / 100 //
let d = ( b - c )/10
 console.log(a , d, c)

 if (a != d && d != c && a != c) {
    document.write(" 3 xonali son raqamlari bir xil emas")
 }else{
    document.write(" 3 xonali son raqamlari orasida bir xillik bor")
 }