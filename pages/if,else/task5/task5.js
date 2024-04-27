let a = +prompt("Birinchi sonni kiriting");
let b = +prompt("Ikkinchi sonni kiriting");
let c = +prompt("Uchinchi sonni kiriting");

if ( a > b && b > c ) {
    document.write(`Kiritilgan a=${a}, b=${b}, c=${c} sonlari ichida ${a} eng kattasi`);
}else{
    document.write(`Kiritilgan ${a} soni eng kattasi emas!`)
}