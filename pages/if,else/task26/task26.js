let a = Number(prompt(" a sonini kiriting"));
let b = Number(prompt("b sonini kiriting"));
let c = Number(prompt(" c sonini kiriting"));

if (a > b && b > c) {
    document.write(`${a}, ${b}, ${c}`);
}
else if (a > c && c > b) {
    document.write(`${a}, ${c}, ${b}`);
}
else if (b > a && a > c) {
    document.write(`${b}, ${a}, ${c}`);
}
else if (b > c && c > a) {
    document.write(`${b}, ${c}, ${a}`);
}
else if (c > a && a > b) {
    document.write(`${a}, ${c}, ${b}`);
}else if (c > b && b > a) {
    document.write(`${c}, ${b}, ${a}`);
}