const quantities = ["Capacitance","Charge","Current","Energy","Force","Frequency","Inductance","Magnetic Flux","Potential","Power","Resistance"];
const symbols = ["F","C","A","J","N","Hz","H","Wb","V","W","&#8486;"];
const units = ["Farad","Coulomb","Ampere","Joule","Newton","Hertz","Henry","Weber","Volt","Watt","Ohm"];
let str = "";
for(let qtyIdx in quantities){
    str += `<div class="unit">
    <div class="quantity">${quantities[qtyIdx]}</div>
    <div class="symbol"style="background-color: orange;">${symbols[qtyIdx]}</div>
    <div class="name" >${units[qtyIdx]}</div>
    </div>`;
}
document.querySelector("#item1").innerHTML += str;

const navToggler = document.querySelector("#navToggler");
const navMenu = document.querySelector("#navbar")
function toggleNavBar(){
    if(navMenu.className == "open"){
        navMenu.classList.remove("open");
    }else{
        navMenu.classList.add("open");
    }
}
navToggler.addEventListener("click", toggleNavBar)
document.addEventListener("keyup",(e)=>{
    if(e.key == "Escape"){
        toggleNavBar();
    }
})
const d = new Date();
document.querySelector("#header-date").innerHTML = d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear();
fetch("./js/definitions.json").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
