let a = +prompt(" a sonini kiriting");
let b =+prompt (" b sonini kiriting");

if (a % 2 == 0 && b % 2 == 1) {
    document.write(`Berilgan sonlardan faqat ${b} soni toq`)
} else if (b % 2 == 0 && a % 2 == 1) {
    document.write(`Berilgan sonlardan faqat ${a} soni toq`)   
}
else if ( a % 2 == 1 && b % 2 == 1) {
    document.write(`Berilgan a=${a} va b=${b} sonlar toq`)   
}else{
    document.write(`Berilgan sonlard ichida hech biri toq  son emas!`)
}