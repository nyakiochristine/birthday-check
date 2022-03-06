const userData = document.querySelector("forms");
const getAkan = document.getElementById("generate");
var Pickdate =document.getElementById("date"). value;
var year = document.getElementById("year") . value;
var month = document.getElementById("month").value;


let gender = userData.gender.value;
const days= [
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



getAkan.addEventListener("click", (e) => {
    e.preventDefault();
}
)

