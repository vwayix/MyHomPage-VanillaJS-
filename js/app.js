const headerbtn = document.querySelector("#headerbtn");
const skill = document.querySelector("#skill");
const project = document.querySelector("#project");
const signIn = document.querySelector("#signIn");
const signUp = document.querySelector("#signUp");
const mainTitle = document.querySelector(".notion h1");
const title = document.querySelector("#title");
const text = document.querySelector(".notion p");

headerbtn.addEventListener("onclick", function(){
    skill.innerHTML = "skill";
    project.innerHTML = "project";
    signIn.innerHTML = "signIn";
    signUp.innerHTML = "signUp";
    mainTitle.innerHTML = "welcome";
    title.innerHTML = "This is a space to share experiences and various projects accumulated through web development.";

    text.innerHTML = 
    "This website is a space where I create various projects using what I learned while studying web development, and record and share the results."+ 
    "At first, we started by creating simple web pages, but in the future, we plan to gradually develop by challenging app development and projects using various APIs."
    "I am improving my skills and learning new skills by creating my own web and carrying out various projects."
    "This site is a portfolio of completed projects and experiences along the way."
    "Additionally, I am running this site to provide some help to those who want to learn web development like me."
    "In the future, I plan to record my growth as a web developer through more practice and projects here. thank you!";
})