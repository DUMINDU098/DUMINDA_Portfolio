const menu = document.getElementById("menu");
const close = document.getElementById("close");
const lists = document.getElementById("lists");
const openmenu = document.getElementById("openmenu");
const closemenu = document.getElementById("closemenu");



var typed= new Typed(".text",{
    strings:["Web Developer", "Graphic Designer", "Software Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

openmenu.addEventListener("click",function(){
    lists.style.display = "flex";
    menu.style.display = "none";
    close.style.display = "flex";
    
  });

  closemenu.addEventListener("click",function(){
    lists.style.display = "none";
    menu.style.display = "flex";
    close.style.display = "none";
    lists.setAttribute("style","");
  });

  lists.addEventListener("click",function(){
    lists.style.display = "none";
    close.style.display = "none";
    menu.style.display = "flex";
    lists.setAttribute("style","");
  })