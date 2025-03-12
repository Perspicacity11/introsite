document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");
    let section = document.querySelector("section");
    let div = document.querySelector("div");
    let navbar = document.querySelector("nav");
    let table = document.querySelector("table");    
    let tr = document.querySelectorAll("tr");
    let th = document.querySelectorAll("th");  
    let a = document.querySelectorAll("a");
    let darkmodebutton = document.querySelector("#darkmodebutton");

    darkmodebutton.addEventListener("click", function() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.style.color = "";
            body.style.backgroundColor = "";
            section.style.backgroundColor = "";
            div.style.backgroundColor = "";
            div.style.color = "";
            navbar.style.backgroundColor = "";
            navbar.style.color = "";
            table.style.backgroundColor = "";
            table.style.color = "";
            a.style.color = "";
            th.style.backgroundColor = "";
            tr.style.backgroundColor = "";
            th.style.color = "";
        } else {
            body.classList.add("dark-mode");
            body.style.color = "black";
            body.style.backgroundColor = "#a3a3a3";
            section.style.backgroundColor = "white";
            div.style.backgroundColor = "white";
            div.style.color = "black";
            navbar.style.backgroundColor = "#a3a3a3";
            navbar.style.color = "black";
            table.style.backgroundColor = "#a3a3a3";
            table.style.color = "white";
            a.style.color = "black";
            th.style.backgroundColor = "#a3a3a3";
            tr.style.backgroundColor = "#cf1010";
            th.style.color = "black";
        }
    });
});


