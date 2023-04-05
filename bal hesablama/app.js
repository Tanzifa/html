let azdiliduzsayi,azdilisehvsayi=0;
let riyaziyyatduzsayi,riyaziyyatsehvsayi=0;
let fizikaduzsayi,fizikasehvsayi=0;
let kimyaduzsayi,kimyasehvsayi=0;
let ingdiliduzsayi,ingdilisehvsayi=0;

newline="\r\n";
let text="1-Bal hesablama"+newline
+ "2-Sistemden cixis"+newline;
let secim=prompt(text);
switch(secim){
    case "1":
        let bal=0;
        azdiliduzsayi=Number(prompt("Azerbaycan dili duz sayi"));
        azdilisehvsayi=Number(prompt("Azerbaycan dili sehv sayi"));
        riyaziyyatduzsayi=Number(prompt("Riyaziyyat duz sayi"));
        riyaziyyatsehvsayi=Number(prompt("Riyaziyyat sehv sayi"));
        fizikaduzsayi=Number(prompt("Fizika duz sayi"));
        fizikasehvsayi=Number(prompt("Fizika sehv sayi"));
        kimyaduzsayi=Number(prompt("Kimya duz sayi"));
        kimyasehvsayi=Number(prompt("Kimya sehv sayi"));
        ingdiliduzsayi=Number(prompt("Ingilis dili duz sayi"));
        ingdilisehvsayi=Number(prompt("Ingilis dili sehv sayi"));
        bal=((azdiliduzsayi+ingdiliduzsayi+kimyaduzsayi)-(azdilisehvsayi+ingdilisehvsayi+kimyasehvsayi)/4)*4+((riyaziyyatduzsayi+fizikaduzsayi)-(riyaziyyatsehvsayi+fizikasehvsayi)/4)*8;
         alert(bal);
        break;
    case "2":
        alert("Sistemden cixildi");
        break;
        case "3":
        alert("Sistemden cixildi");
        break;
    default:
        alert("Zehmet olmasa 1 ve ya 2 reqemini secin!");
        break;
        //
}