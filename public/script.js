// navbar js.....



const home = document.getElementById("home");
const about = document.getElementById("about");
const  project = document.getElementById("project");
const contact = document.getElementById("contact");

home.addEventListener("click",()=>{
    home.style.color="#e74c3c";
    about.style.color="white";
    project.style.color="white";
    contact.style.color="white";

});


about.addEventListener("click",()=>{
    home.style.color="white";
    about.style.color="#e74c3c";
    project.style.color="white";
    contact.style.color="white";

});

project.addEventListener("click",()=>{
    home.style.color="white";
    about.style.color="white";
    project.style.color="#e74c3c";
    contact.style.color="white";

});

contact.addEventListener("click",()=>{
    home.style.color="white";
    about.style.color="white";
    project.style.color="white";
    contact.style.color="#e74c3c";

});







// about js.......


const skill = document.getElementById('skill')
const education = document.getElementById('education')
const aboutContent = document.querySelector(".aboutContent");
const aboutContent2 = document.querySelector("#aboutContent2");


skill.addEventListener("click",()=>{
    skill.style.color="#e74c3c";
    education.style.color="white";
    aboutContent.style.display="block";
    aboutContent2.style.display="none";
})


education.addEventListener("click",()=>{
    skill.style.color="white";
    education.style.color="#e74c3c";
    aboutContent2.style.display="block";
    aboutContent.style.display="none";
});


// javascript for responsive

const crose  = document.getElementById("crose");
const menu  = document.getElementById("menu");
const icons = document.querySelector(".icons");

crose.addEventListener("click",()=>{
    icons.style.display="none";
    menu.style.display="block";
})

menu.addEventListener("click",()=>{
    icons.style.display="block";
    menu.style.display="none"
})



 

    