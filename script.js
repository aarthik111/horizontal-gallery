let scrollin = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
scrollin.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollin.scrollLeft += evt.deltavY;
    scrollin.style.scrollBehavior = "auto"
});
nextbtn.addEventListener("click",()=>{
    scrollin.style.scrollBehavior = "smooth"
    scrollin.scrollLeft += 900;
});
backbtn.addEventListener("click",()=>{
    scrollin.style.scrollBehavior = "smooth"
    scrollin.scrollLeft -= 900;
});