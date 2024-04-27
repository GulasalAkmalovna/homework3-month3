let a = +prompt(`a sonini kiriting`);
let b = +prompt(`b sonini kiriting`);
let c = +prompt(`c sonini kiriting`);

if (a > b && b > c) {
    document.write(`Kiritilgan a=${a}, b=${b}, c=${c} sonlari ichida ${b} soni ${a} va ${c} lar orasida`);
}
else if (c > b && b > a) {
    document.write(`Kiritilgan a=${a}, b=${b}, c=${c} sonlari ichida ${b} soni ${a} va ${c} lar orasida`);
}
else{
    document.write(`${b} soni ${a} va ${c} lar orasida emas!`)
}