let month = +prompt("Oy ni kiriting");
switch (month) {
    case 1:
    case 4:
    case 6:
    case 9:
    case 11:
        document.write("Ushbu oy 30 kun") 
        break;
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write("Ushbu oy 31 kun") 
        break;
    case 2:
        document.write("Ushbu oy 29 kun") 
        break;
    default:
        document.write("Oy ni tug'ri kiriting. 2024 yil hisobida")
}