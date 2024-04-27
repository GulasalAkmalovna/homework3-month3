let num = +prompt("Istalgan butun son kiriting.")

if (num % 2 == 0 && num > 0) {
    document.write(` Kiritilgan ${num} soni JUFT MUSBAT`)
} else if ( num % 2 == 0 && num < 0) {
    document.write(` Kiritilgan ${num} soni JUFT MANFIY`)
} else if ( num % 2 == 1 && num > 0) {
    document.write(` Kiritilgan ${num} soni TOQ MUSBAT`)
} else {
    document.write(` Kiritilgan ${num} soni TOQ MANFIY`)
}