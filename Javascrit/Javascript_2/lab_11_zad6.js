
function start()
    {
      setInterval(function x()
      {
      let losowa = Math.floor(6*Math.random());
      let stara;
   
      if(losowa == 0)
      {
        document.getElementById("zmianaobrazu").src="images/o6.jpg";
        stara = losowa;

      }
      else if(losowa == stara)
      {
        losowa--;
        document.getElementById("zmianaobrazu").src="images/o"+losowa+".jpg";
        stara = losowa;

      }
      else
      {
        document.getElementById("zmianaobrazu").src="images/o"+losowa+".jpg";
        stara = losowa;

      }
    }, 10000);
    }