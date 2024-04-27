let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
if (a % 2 == 1 && b % 2 == 1) {
    document.write(`${a} soni ham ${b} soni ham toq`);
}
else if (a % 2 == 0 && b % 2 == 1) {
    document.write(`${a} soni juft ${b} soni esa toq`);
}
else if (a % 2 == 1 && b % 2 == 0) {
    document.write(`${a} soni toq ${b} soni juft`);
}
else if (a % 2 == 0 && b % 2 == 0) {
    document.write(`${a} soni ham ${b} soni ham juft`);   
}