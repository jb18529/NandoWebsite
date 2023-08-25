// Implementing dark mode button

darkModeButton=document.getElementById("dark-mode-button");

handleButtonClick = function (){
    // console.log("button clicked");
    

    // body changes
    body = document.body;
    body.style.backgroundColor = "#000000";
    // #091d1e
    body.style.color = "#000000";
    // #121212
    
    // title changes
    navbar = document.getElementById("navBar");
    navbar.style.backgroundColor = "#1f1d1d";
    navbar.style.color = "#FFFFFF";

    footbar = document.getElementById("footBar");
    footbar.style.backgroundColor = "#1f1d1d";
    footbar.style.color = "#FFFFFF";


    intro = document.getElementById("intro");
    intro.style.backgroundColor = "#1f1d1d";
    intro.style.color = "#FFFFFF";

    prod = document.getElementsByClassName("product");

    for (prod of prod){
         prod.style.backgroundColor = "#1f1d1d";
         prod.style.color = "#FFFFFF";

    }




    
}

darkModeButton.addEventListener("click", handleButtonClick);




invertButton=document.getElementById("invert-button");
invertButtonClick = function (){

    body = document.body;
    body.style.backgroundColor = "#FFFFFF";

    body.style.color = "#FFFFFF";
    
    navbar = document.getElementById("navBar");
    navbar.style.backgroundColor = "#e0e2e2";
    navbar.style.color = "#000000";

    footbar = document.getElementById("footBar");
    footbar.style.backgroundColor = "#e0e2e2";
    footbar.style.color = "#000000";


    intro = document.getElementById("intro");
    intro.style.backgroundColor = "#e0e2e2";
    intro.style.color = "#000000";

    prod = document.getElementsByClassName("product");

    for (prod of prod){
        prod.style.backgroundColor = "#e0e2e2";
        prod.style.color = "#FFFFFF";

    }  



}

invertButton.addEventListener("click", handleButtonClick ? invertButtonClick : handleButtonClick);







