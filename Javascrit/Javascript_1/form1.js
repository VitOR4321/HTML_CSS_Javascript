function sprawdzDane(f)
{
  let imieWzor= /[A-Z]{1}[a-z]+\s{1}[A-Z]{1}[a-z]+/;
  let indexWzor = /[A-Z]{1}[0-9]{5}/;
  let rokWzor = /[0-9]{4}/;
  let imieNazwisko = document.getElementsByName("imienazwisko")[0].value;
  let nrAlbumu = document.getElementsByName("nrindeksu")[0].value;
  let rok = document.getElementsByName("rok")[0].value;
  if(!imieWzor.test(imieNazwisko)){
    document.getElementsByName("imienazwisko")[0].focus();
    return false;
  }
  else if(!indexWzor.test(nrAlbumu)){
    document.getElementsByName("nrindeksu")[0].focus();
    return false;
  }
  else if(!rokWzor.test(rok) || rok>new Date().getFullYear()){
    document.getElementsByName("rok")[0].focus();
    console.log("Niepoprawny rok rozpoczecia studiów!");
    return false;
  }
  else {
    alert("Poprawny formularz!");
    return true;
  }
}
