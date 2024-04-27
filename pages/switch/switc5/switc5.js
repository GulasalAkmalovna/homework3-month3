
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
let amal = prompt("amalni kiriting");

switch (amal) {
    case "+":
        document.write(a + b)
        break;
     case "*":
        document.write(a * b)
        break;
    case "/":
         document.write(a / b)
        break;
    case "-":
         document.write(a - b)
        break;
    case "%":
     document.write(a % b)
    break;     
    default:
       document.write(" +,-, *, /, % amallaridan kirting")
}