function dni()
{
    document.getElementById("dniTygodnia").style.display="block";
}
function schowaj(f)
{
    let dzien = document.getElementById("dzien").value;
    if(dzien=="poniedziałek" || dzien=="wtorek" || dzien=="środa" || dzien=="czwartek" || dzien=="piątek" || dzien=="sobota" || dzien=="niedziela")
    {
        document.getElementById("dniTygodnia").style.display="none";
    }
    else
    {
        alert("Proszę poprawnie wpisać dzień tygodnia.");
    }
}