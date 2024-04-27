let a = +prompt("Butun son kiriting");
let b = +prompt("Butun son kiritng");

if (a > b) {
    if (a > 0) {
        document.write(`Kiritilgan butun sonlar ichida ${a} eng kattasi va u musbat son`)
    }
    else{
        document.write(`Kiritilgan butun sonlar ichida ${a} eng kattasi va u manfiy son`)
    }
}else if ( b > a ) {
    if ( b > 0 ) {
        document.write(`Kiritilgan butun sonlar ichida ${b} eng kattasi va u musbat son`)
    }else{
        document.write(`Kiritilgan butun sonlar ichida ${b} eng kattasi va u manfiy son`)
    }
}