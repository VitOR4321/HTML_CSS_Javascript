//zadanie 5
function start()
{
    setInterval(function x()
    {
        let nazwa =  navigator.userAgent;
        document.getElementById("browser").innerHTML=nazwa;
        let szerokosc=window.innerWidth;
        let wysokosc=window.innerHeight;
        document.getElementById("width").innerHTML=szerokosc +" szerokosc";
        document.getElementById("height").innerHTML=wysokosc +" wysokosc";
    }, 1000);
}


