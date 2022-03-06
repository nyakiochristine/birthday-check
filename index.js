function getData()
const userData = new FormData (form);
const form = form;


const buttonGen = document.querySelector(".generate")
const genderInput = document.querySelectorAll(".radios")

const datepicker = document.querySelector("#date").value;
const year= document.querySelectorAll("year").value;
const month = document.querySelector("month").value;


const days= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
]

const akanFemalenames= [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",

]
const akanMalenames= [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"

]
let day= datepicker.getDay();