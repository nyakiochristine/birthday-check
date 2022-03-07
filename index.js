
function validate() {
var Pickdate = document.getElementById("date").value;
var dd = parseInt(Pickdate);
var year = document.getElementById("year").value;
var cc = year.substring(0,2);
cc = parseInt(cc);
var yy = year.substring(2,4)
yy = parseInt(yy);
var month = document.getElementById("month").value;
var mm = parseInt(month);
var genderInput = document.querySelector('input[name="gender"]:checked').value;
var weekDay= Math.floor( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;



const days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
]

let akanFemalenames= [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",

]
let akanMalenames= [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"

]


var nameAkan;
if (genderInput=="female"){
    alert("Your name is " + akanFemalenames[weekDay] + " because you were born on " + days[weekDay] )
}
else if (genderInput=="male"){
    alert("Your name is " + akanMalenames[weekDay] + " because you were born on " + days[weekDay] )

    
}


}


