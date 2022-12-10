"use strict";

/*
Zadanie 1. Skonstruuj stronę WWW ze skryptem JavaScript, który wyświetla w kolejnych akapitach:
- nazwę przeglądarki, z której korzysta użytkownik,
Skorzystaj z obiektu navigator oraz jego właściwości: userAgent:
String navigator.userAgent
- bieżącą datę i godzinę,
Skorzystaj z klasy Date oraz jej metody toString. Metoda toString jest implementowana w
każdej klasie, służy do zapisania obiektu tej klasy w postaci łańcucha tekstowego String:
String Date.toString()
- liczbę całkowitą wylosowaną z przedziału [0,100].
Skorzystaj z klasy Math oraz jej metod random i rand. Metoda random losuje liczbę z przedziału
[0,1), metoda round zaokrągla podaną jako parametr liczbę do najbliższej liczby całkowitej. Obie
zwracają w wyniku liczbę w postaci obiektu klasy Number.
Number Math.random()
Number Math.round(<liczba>)
*/

let zad1 = function() {
    document.getElementById("zadanie1-1").innerHTML = navigator.userAgent;
    document.getElementById("zadanie1-2").innerHTML = new Date().toString();
    document.getElementById("zadanie1-3").innerHTML = Math.round(100*Math.random());
}

/*
Zadanie 2. Zmodyfikuj skrypt z zadania 1 tak, żeby wylosowana liczba była zapamiętywana w zmiennej
zamiast wyświetlana na ekranie. Dodaj do skryptu przycisk, którego kliknięcie spowoduje wyświetlenie
okienka z pytaniem jaką liczbę wylosował komputer. Wyświetl na stronie odpowiednie komunikaty w
przypadku gdy: użytkownik zgadł, nie zgadł, podał za małą liczbę lub podał za dużą liczbę.
Wyświetlenie okienka z komunikatem umożliwia metoda prompt obiektu window:
String window.prompt(<komunikat>,<wartość domyślna>)
Oba parametry są łańcuchami tekstowymi. Jako wynik metoda zwraca łańcuch tekstowy wpisany do
okienka przez użytkownika.
Reakcję należy przypisać zdarzeniu kliknięcia na przycisku onClick.
Zmodyfikuj skrypt tak żeby użytkownik mógł zgadywać wielokrotnie. Wyświetl dodatkowy komunikat z
informacją, który raz użytkownik zgaduje oraz ile czasu mu to zajęło.
Utwórz dodatkowe zmienne do przechowywania liczby prób i czasu. W osobnym akapicie wyświetl
informację o tym który raz użytkownik zgaduje oraz ile czasu mu to zajęło.
Oprogramuj błędy - wyświetl odpowiednie komunikaty i zmień działanie programu w przypadku podania
przez użytkownika niepoprawnej liczby. Niepoprawną liczbę można rozpoznać sprawdzając czy to co podał
użytkownik jest liczbą, a następnie sprawdzając czy mieści się w wymaganym zakresie.
Do sprawdzania czy wartość jest liczbą służy funkcja: Boolean isNaN(<wartość>).
*/

let liczba2 = Math.round(100*Math.random());
let licznik2 = 0;
let data2 = new Date();
let zagadka2 = function() {
    let data2a = new Date();
    let zgad = parseInt(window.prompt("Zgadnij liczbę od 0 do 100",0));
    licznik2++;
    if(zgad==liczba2) {
        document.getElementById("zadanie2").innerHTML = "Liczba odgadnięta. Zajęło Ci to "+licznik2+" prób, w czasie "+(data2a-data2)/1000+"s";
    }
    else if(zgad<liczba2) {
        document.getElementById("zadanie2").innerHTML = "Liczba za mała";
    }
    else if(zgad>liczba2) {
        document.getElementById("zadanie2").innerHTML = "Liczba za duża";
    }
    else if(isNaN(data2)) {
        document.getElementById("zadanie2").innerHTML = "Podana wartość nie jest liczbą.";
    }
}

/*
Zadanie 3. Napisz funkcję o nazwie pwbs, która obliczy pierwiastek z wartości bezwzględnej sumy dwóch
podanych liczb. Wynik powinien mieć postać: |2+2|=2.
Aby zamienić znaki zapisane w zmiennej x na liczbę skorzystaj z funkcji parseFloat:
Number parseFloat(<wartość>)
Aby obliczyć pierwiastek liczby x skorzystaj z metody (funkcji) sqrt obiektu Math:
Number Math.sqrt(x)
Aby obliczyć wartość bezwzględną liczby x skorzystaj z funkcji abs obiektu Math:
integer Math.abs(x)
Sprawdź czy skrypt działa testując go dla wybranych par liczb, np. 4 i -5, 2 i 14 itd.

Wywołaj funkcję dla 10 par liczb wylosowanych z przedziału [-10,10]. Wyniki razem z działaniami wyświetl w
kolejnych akapitach.
*/

let pwbs = function(x1,x2) {
    return Math.sqrt(Math.abs(parseFloat(x1)+parseFloat(x2)));
}

let zad3 = function() {
    document.getElementById("zadanie3-1").innerHTML = "sqrt(|4-5|) = "+pwbs(4,-5);
    document.getElementById("zadanie3-2").innerHTML = "sqrt(|2+14|) = "+pwbs(2,14);
    let str = "";
    let x1,x2;
    for(let i=0; i<10; i++) {
        x1 = Math.round(20*Math.random())-10;
        x2 = Math.round(20*Math.random())-10;
        str += "<p> sqrt(|"+x1+(x2>0?"+":"")+x2+"|) = "+pwbs(x1,x2);
    }
    document.getElementById("zadanie3-3").innerHTML = str;
}

/*
Zadanie 4. Skonstruuj skrypt, który zapisze do tablicy jednowymiarowej 12 liczb całkowitych z zakresu [0,10]
oraz wyświetli je na ekranie w akapicie. Zapis do tablicy umieść w osobnej funkcji.
Deklaracja tablicy przechowywanej w zmiennej tab może mieć postać:
var tab=new Array()
JavaScript umożliwia łatwe wyświetlenie tablicy po zapisaniu jej w postaci łańcucha tekstowego String.
Zapisanie wszystkich elementów tablicy oddzielonych podanym separatorem w łańcuchu tekstowym
String umożliwia funkcja join obiektu Array:
String Array.join(<separator>)
Uzupełnij skrypt, tak żeby wyświetlił liczby z tablicy po raz drugi w postaci tabelki HTML <table>.
Dodaj do skryptu funkcje obliczające sumę oraz średnią liczb z tablicy. Do obliczenia średniej wykorzystaj
funkcję suma. Wyświetl informację z wynikami w osobnych akapitach.
Zmodyfikuj skrypt, tak żeby użytkownik mógł podać ile liczb chce wylosować.
*/

let zapis4 = function() {
    let arr = new Array();
    for(let i=0; i<12; i++)
        arr.push(Math.round(10*Math.random()));
    return arr;
}

let suma = function(arr) {
    let sum = 0;
    for(let i in arr)
        sum += arr[i];
    return sum;
}

let srednia = function(arr) {
    return suma(arr)/arr.length;
}

let zad4 = function() {
    let liczby = zapis4();
    document.getElementById("zadanie4-1").innerHTML = liczby.join(", ");
    let str = "";

    for(let i=0; i<4; i++) {
        str += "<tr>";
        for(let j=0; j<3; j++)
            str += "<td>"+liczby[3*i+j]+"</td>";
        str += "</tr>";
    }
    document.getElementById("zadanie4-2").innerHTML = str;
    document.getElementById("zadanie4-3").innerHTML = "Suma = "+suma(liczby);
    document.getElementById("zadanie4-4").innerHTML = "Średnia = "+srednia(liczby);


}

/*
Zadanie 5. Napisz funkcję o nazwie silnia, która obliczy silnię podanej liczby. Korzystając z tej funkcji
wyświetl na liście nienumerowanej silnie kolejnych liczb od 0 do liczby podanej przez użytkownika przy
wejściu na stronę.
0! = 1
1! = 1
2! = 2
3! = 6
…
Oprogramuj błędy - w przypadku podania przez użytkownika niepoprawnej wartości wyświetl odpowiedni
komunikat i zmodyfikuj działanie programu.

*/

let silnia = function(n) {
    if(n==0)
        return 1;
    let prod = 1;
    for(let i=1; i<=n; i++)
        prod *= i;
    return prod;
}

let zad5 = function() {
    let n =document.getElementById("zadanie5-1").value;
    if(isNaN(n) || n<0) {
        alert("Nie można obliczyć silni dla podanej wartości!");
        return;
    }
    let str = "";
    for(let i=0; i<=n; i++)
        str += i+"! = "+silnia(i)+"<br>";
    document.getElementById("zadanie5-2").innerHTML = str;
}

/*
Zadanie 6. Skonstruuj skrypt, który wylosuje i zapisze do tablicy jednowymiarowej 10 liczb z przedziału
[-10,10]. Zapis do tablicy umieść w osobnej funkcji. Wyświetl tablicę na ekranie, a następnie napisz funkcję,
która policzy ile jest w tej tablicy liczb dodatnich, ile zer i ile liczb ujemnych. Wyświetl informacje o wynikach.
Zmodyfikuj skrypt, tak żeby użytkownik mógł podawać z jakiego zakresu liczby chce losować.
*/

let zapis6 = function() {
    let arr = new Array();
    for(let i=0; i<10; i++)
        arr.push(Math.round(20*Math.random()))-10;
    return arr;
}

let zapis6v2 = function(a,b) {
    let arr = new Array();
    for(let i=0; i<10; i++)
        arr.push(Math.round(b*Math.random()))-a;
    return arr;
}

let ileduz = function(arr) {
    let d=0,z=0,u=0;
    for(let i in arr) {
        if(arr[i] > 0)
            d++;
        else if(arr[i] == 0)
            z++;
        else
            u++;
    }
    return new Array(d,z,u);
}

let zad6 = function() {
    let arr = zapis6();
    document.getElementById("zadanie6-1").innerHTML = zapis6(arr).join(", ");
    let wyniki = ileduz(arr);
    document.getElementById("zadanie6-2").innerHTML = "Dodatnie "+wyniki[0]+", zera "+wyniki[1]+", ujemne "+wyniki[2];
    arr = zapis6v2(1,100);
    document.getElementById("zadanie6-3").innerHTML = "Liczby od 0 do 100: "+zapis6(arr).join(", ");
    wyniki = ileduz(arr);
    document.getElementById("zadanie6-4").innerHTML = "Dodatnie "+wyniki[0]+", zera "+wyniki[1]+", ujemne "+wyniki[2];
}

/*
Zadanie 7. Skonstruuj stronę lotto chybił-trafił losującą na żądanie zestaw liczb dla wybranego rodzaju
zakładu. Pamiętaj, że liczby nie mogą się powtarzać. Do wylosowania jednego zestawu liczb napisz funkcję,
liczby zapisz w tabeli, i zwróć ją jako wynik funkcji. Na stronie wyświetl wybraną przez użytkownika liczbę
zestawów.
*/

let losuj7 = function(ile) {
    let arr = new Array();
    let okay = true;
    let rand;
    for(let i=0; i<ile; i++) {
        do {
            okay = true;
            rand = Math.round(50*Math.random());
            for(let j=0; j<arr.length; j++)
                if(arr[j]==rand)
                    okay = false;
        } while(!okay);
        arr.push(rand);
    }
    return arr;
}

let zad7 = function() {
    let arr = losuj7(5);
    document.getElementById("zadanie7-2").innerHTML = arr.join(", ");

}