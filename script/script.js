var test = document.getElementById("test");
var test1 = document.getElementById("test1");
var test2 = document.getElementById("test2");
var test3 = document.getElementById("test3");
var x = document.getElementsByClassName("text");
var y = document.getElementsByClassName("text1");
var z = document.getElementsByClassName("text2");
var contain = document.getElementById("contain");
var konec = document.getElementById("konec");
var i;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 1000) {
    test.className = "kvadrat";
    test1.className = "kvadrat1";
    test2.className = "kvadrat2";
    test3.className = "kvadrat3";
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "block";
    }
    if (document.documentElement.scrollTop > 2000) {
      test.className = "kvadratkonc";
      test1.className = "kvadratkonc1";
      test2.className = "kvadratkonc2";
      test3.className = "kvadratkonc3";
      contain.className = "contain1";
      for (i = 0; i < x.length; i++) {
          y[i].style.display = "none";
          z[i].style.display = "block";
      }
      if (document.documentElement.scrollTop > 3000) {
      test.className = "kvadratbejs";
      test1.className = "kvadratbejs1";
      test2.className = "kvadratbejs2";
      test3.className = "kvadratbejs3";
      konec.className = "konec1";
      }
      else {
      test.className = "kvadratkonc";
      test1.className = "kvadratkonc1";
      test2.className = "kvadratkonc2";
      test3.className = "kvadratkonc3";
      konec.className = "konec";
      }
    }
    else {
        test.className = "kvadrat";
        test1.className = "kvadrat1";
        test2.className = "kvadrat2";
        test3.className = "kvadrat3";
        contain.className = "contain";
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            z[i].style.display = "none";
            y[i].style.display = "block";
        }
    }
  } 
  else {
    test.className = "krog";
    test1.className = "krog1";
    test2.className = "krog2";
    test3.className = "krog3";
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
        y[i].style.display = "none";
        z[i].style.display = "none";
    }
  }
}