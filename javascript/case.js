var ussd = prompt("enter a number")
ussd = Number.parseInt (ussd)
switch(ussd){
    case 1:
        document.write("send money please") // writing directly  to document
        break;
    case 2:
        console.log("send airtime") // writing to consol
        break;
    default:
        console.log("try a valid number")
        break;
}