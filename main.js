
var nombres = [];
function sumbit()
{

var invitado = document.getElementById("invitados").value;
nombres.push(invitado);
var longitus = nombres.length;
document.getElementById("display_ name").innerHTML = nombres.toString();
}

function sorting()
{

nombres.sort();
var i=nombres.join("<br>");

document.getElementById("sorted").innerHTML=i.toString();

}

function show()
{

var i= nombres.join("<br>");
console.log(nombres);
document.getElementById("p1").innerHTML=i.toString();
document.getElementById("sort_button").style.display="block";

}

function searching()
{

var s=document.getElementById("s1").value;
var found=0;
var j;
for( j+0; j< nombres.length; j++)
    {
      if(s==nombres[j]){
        found=found+1;
      }
    }
    document.getElementById("p2").innerHTML= "name found"+found+"time/s";
    console.log("found name" +found+"times/s");

}