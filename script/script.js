
document.getElementById("log").onclick = function (){
    var magicWord ="";
    magicWord = document.getElementById("search").value;
    alert(magicWord);
}
function myFunction() {
    var x = document.getElementById("header2");
    if (x.className === "header2") {
      x.className += " responsive";
    } else {
      x.className = "header2";
    }
  }