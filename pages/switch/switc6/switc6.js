let score = +prompt("Ballingizni kiriting");
switch (score) {
    case 5:
        document.write("Stipendiya miqdori: 650.000 so'm");
        break;
    case 4:
        document.write("Stipendiya miqdori: 550.000 so'm");
        break;
    case 3:
        document.write("Stipendiya miqdori: 450.000 so'm");
        break;
    case 2:
        document.write("SIZGA STIPENDIYA YOQ. YAXSHI O'QISH KERAK EDI !");
        break;
    default:
        document.write("BALLNI TO'GRI KIRITING")
}