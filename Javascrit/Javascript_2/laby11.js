
//zadanie 1
let colortable = ['#0C0C0C0C','grey','red','#11111111','#22222222'
,'#66666666','#55555555','#44444444','blue','green']
function zmiana(f)
{
    let losowa = colortable[Math.floor(10*Math.random())];
    f.style.color = losowa;
}
//zadanie 2
function zmianaZdjecia(f){
    document.getElementById("obraz").src="images/o"+f+".jpg";
}
//zadanie 3
function przeliczStopnie()
{
    let x=document.getElementById("kat").value;
    var pi = Math.PI;
    let wynik = x * (180/pi);
    if(isNaN(wynik))
    {
        document.getElementById("wynikStopnie").innerHTML = "prosze podać liczbe";
    }
    else if(x=="")
    {
        document.getElementById("wynikStopnie").innerHTML = "prosze wprowadzic wartosc";
    }
    else
    {
        document.getElementById("wynikStopnie").innerHTML = wynik+" stopnia";
    }
    
}

function przeliczRadiany()
{
    let x=document.getElementById("kat").value;
    let pi = Math.PI;
    let wynik = x * (pi/180);
    if(isNaN(wynik))
    {
        document.getElementById("wynikStopnie").innerHTML = "prosze podać liczbe";
    }
    else if(x=="")
    {
        document.getElementById("wynikStopnie").innerHTML = "prosze wprowadzic wartosc";
    }
    else
    {
        document.getElementById("wynikRadiany").innerHTML = wynik+" rad";
    }
    
}
//zadanie 4
window.setInterval(function zmianacopiecsekund()
{
    let losowa = colortable[Math.floor(10*Math.random())];
    document.getElementById("naglowek1").style.color = losowa;
}, 5000);
