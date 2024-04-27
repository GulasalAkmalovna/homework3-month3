let num = Number(prompt("IStalgan son kiriting"));

if ( num % 2 == 0 ) {
    document.write(`Kiritilgan ${num} soni juft son`);
} 
else if (num == 0) {
    document.write(`Kiritilgan ${num} raqami juft ham toq ham emas`);
}else{
    document.write(`Kiritilgan ${num} soni toq son`)
}