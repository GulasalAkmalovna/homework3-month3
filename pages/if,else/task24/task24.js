let a = +prompt(" a sonini kiriting");
let b =+prompt (" b sonini kiriting");
let c =+prompt (" c sonini kiriting");
if (a > 0 && b < 0 && c < 0 ) {
 document.write(`Kiritgan sonlarz ichidan faqat ${a} soni MUSBAT`)   
}
else if ( b > 0 && a < 0 && c < 0) {
    document.write(`Kiritgan sonlarz ichidan faqat ${b} soni MUSBAT`) 
}else if (c > 0 && a < 0 && b < 0) {
    document.write(`Kiritgan sonlarz ichidan faqat ${c} soni MUSBAT`) 
}else{
    document.write("Qayta urinib kuring")
}