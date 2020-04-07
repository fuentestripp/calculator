var halfresult = document.getElementById('halfbutton');
halfresult.addEventListener("click", halfx)

function halfx(){
  var halfass = document.getElementById("halfinput").value;
  var end =  halfresult/2;
  statement = "Half of " + halfass + " is " + end;
  alert(statement);
}

var fortunes = document.getElementById("fortunebutton").value;
fortunes.addEventListener("click", fortunes)
var fortunelist = ["Today it's up to you to create the peacefulness you long for.", "A friend asks only for your time not your money.", "If you refuse to accept anything but the best, you very often get it.", "Oof you got bad luck.", "Enjoy the good luck a companion brings you.", "People are naturally attracted to you.", "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.", "A chance meeting opens new doors to success and friendship.", "You learn from your mistakes... You will learn a lot today.", "If you have something good in your life, don't let it go!", "What ever you're goal is in life, embrace it visualize it, and for it will be yours.", "Your shoes will make you happy today.", "You cannot love life until you live the life you love.", "Be on the lookout for coming events; They cast their shadows beforehand.", "You must try, or hate yourself for not trying.", "Adversity is the parent of virtue."]

var fortuneoutput = document.getElementById("fortuneoutput")
fortuneoutput.addEventListener("click", restyle)

function fortune() {
  var input = document.getElementById("fortuneinput").value;
  var fortunefinal = fortunelist[Math.floor(Math.random() * fortunes.length)];
  if(input){
    fortunebutton.innerHTML = "To whom it may concern: " + fortunefinal;
  }


  }


function restyle(){
  var font = Math.floor(Math.random() * 23)
  var color1 = Math.floor(Math.random() * 275)
  var color2 = Math.floor(Math.random() * 232)
  var color3 = Math.floor(Math.random() * 257)
  var elBack1 = Math.floor(Math.random() * 57.5)

  fortuneoutput.style.fontSize = font + "px";
  fortuneoutput.style.color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
  fortuneoutput.style.background = "rgb(" + elBack + ")";


}
