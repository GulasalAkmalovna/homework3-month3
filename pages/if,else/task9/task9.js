let a = +prompt(" a sonini kiriting");
let b =+prompt (" b sonini kiriting");
let c = +prompt(" c sonini kiriting");

if (a > 0 && b < 0 && c < 0) {
    document.write(`Berilgan sonlardan faqat ${a} soni musbat`);
}
else if ( a > 0 && b > 0 && c < 0 ){
    document.write(`Berilgan sonlardan faqat ${a}  va ${b} sonlari musbat`);
}else if (a > 0 && b > 0 && c > 0  ) {
    document.write("Berilgan sonlarni barchasi musbat")
}else {
    document.write("Berilgan sonlarni hech biri musbat emas")
}