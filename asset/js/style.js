const preloader = document.querySelector("[data-preloader]");

window.addEventListener('load',()=>{
    preloader.classList.add("remove");
})

// add evnets on multiple elemnets 
const  addEventonElements = function(elements,eventType,callback){
    let  len=elements.length;
    for(let i=0; i<len; i++){
        elements[i].addEventListener(eventType,callback)
    }
}

// Navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const ToggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventonElements(navToggler,"click",ToggleNav);


//------- Header------- 

const header = document.querySelector("[data-header]");
window.addEventListener("scroll",function(){
    header.classList[window.scrollY > 100 ? "add": "remove"]("active");
});