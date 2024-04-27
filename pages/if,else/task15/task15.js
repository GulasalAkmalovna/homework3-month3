let a = +prompt("Butun son kiriting");
let b = +prompt("Butun son kiritng");
let c = +prompt("Butun son kiriting");

if (a > b && b > c || a > c && c > b) {
    document.write(` Kiritilgan a=${a}, b=${b}, c=${c} sonlar ichida "${a}" eng kattasi`)
}
else if ( b > a && a > c || b > c && c > a) {
    document.write(` Kiritilgan a=${a}, b=${b}, c=${c} sonlar ichida "${b}" eng kattasi`)
}
else if (c > a && a > b || c > b && b > a) {
    document.write(` Kiritilgan a=${a}, b=${b}, c=${c} sonlar ichida "${c}" eng kattasi`)
}