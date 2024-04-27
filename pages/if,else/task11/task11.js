let num = +prompt("Telefon raqam kodini kiriting");
if (num == 33 || num == 88 || num == 97) {
    document.write(`Kiritilgan ${num} kodi "UMS" kompaniyasiga tegishli`);
}else if (num == 93 || num == 94 ) {
    document.write(`Kiritilgan ${num} kodi "UCELL" kompaniyasiga tegishli`);
}else if (num == 90 || num == 91) {
    document.write(`Kiritilgan ${num} kodi "BEELINE" kompaniyasiga tegishli`);
}else if ( num == 99 ) {
    document.write(`Kiritilgan ${num} kodi "UZMOBILE" kompaniyasiga tegishli`);
}else{
    document.write("Iltimos qayta kiriting")
}