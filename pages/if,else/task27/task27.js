alert(" mackbook, hp, asus, rogstrix, lenova lar suralsin")
let laptop = prompt("Kompyuter nomini kiriting");
if (laptop == "mackbook") {
    document.write(`${laptop} = 2000$`)
}
else if (laptop == "hp") {
    document.write(`${laptop} = 1400$`)
}
else if (laptop == "asus") {
    document.write(`${laptop} = 1270$`)
}
else if (laptop == "rogstrix") {
    document.write(`${laptop} = 1500$`)
}
else if (laptop == "lenova") {
    document.write(`${laptop} = 1250$`)
}else{
    document.write("Hli bizda mavjud emas")
}