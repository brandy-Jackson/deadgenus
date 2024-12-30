

var L1 = document.getElementById("mySelect5");
function myFunction() {
  var x = document.getElementById("mySelect").value;
  // document.getElementById("demo").innerHTML = "You selected: " + x;
  document.getElementById("mainFrame").src = "https://xhamster.com/embed/" + x;
};

function myFunction2() {
  var x = document.getElementById("mySelect2").value;
  // document.getElementById("demo").innerHTML = "You selected: " + x;
  document.getElementById("mainFrame").src = "https://www.xvideos.com/embedframe/" + x;
};

function myFunction3() {
  var x = document.getElementById("mySelect3").value;
  // document.getElementById("demo").innerHTML = "You selected: " + x;
  document.getElementById("mainFrame").src = "https://www.youporn.com/embed/" + x;
};




function myFunction4() {
  var x = document.getElementById("mySelect4").value;
  document.getElementById("mainFrame").src = "https://txxx.com/embed/" + x;
};

function myFunction5() {
  var x = document.getElementById("mySelect5").value;
  document.getElementById("mainFrame").src = "https://www.pornhub.com/embed/" + x;
};

function myFunction6() {
  var x = document.getElementById("mySelect6").value;
  document.getElementById("mainFrame").src = "https://www.pornhub.com/playlist/" + x;
};

function myListFunction(L1) {

};




//<iframe src="https://www.pornhub.com/embed/ph57854dc616b03" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>//   <iframe width="426" height="265" src="https://txxx.com/embed/5746915/" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>       
//function getwebvid(webUrls[a]){
//   document.getElementById("mainFrame").src="https://xhamster.com/"+"webURLs[2]";            
//     function myFunction3() {            };
// <iframe width="560" height="315" src="https://www.youtube.com/embed/"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//---------------------------------
var Cntr = -1;
var rage = (function (Cntr) {

  counter = (c);

  return {

    incrementCounter: function () {
      return counter++;
      console.log(this.counter);
    },

    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
//testModule.resetCounter();
rage.incrementCounter;