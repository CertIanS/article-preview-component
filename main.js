const button = document.getElementById("share");
const button2 = document.getElementById("share2");

button.addEventListener("click", function(){
    if(document.getElementById("name").style.display !== "none" && screen.width <= 850){
        document.getElementById("name").style.display = "none";
        document.getElementById("shareLinks").style.display = "flex";
        document.getElementById("shareLinks").style.backgroundColor = "hsl(217, 19%, 35%)";
        document.getElementById("shareLinks").style.color = "white";
        document.getElementById("shareLinks").style.height = "70px";
        document.getElementById("nameAndOrLinks").style.display = "none";
        button.style.display = "none";
        button2.style.display = "flex";
        button2.style.backgroundColor = "hsl(212, 23%, 69%)";
    }else if(screen.width > 850 && document.getElementById("shareLinks").style.display !== "flex"){
        document.getElementById("shareLinks").style.display = "flex";
        button.style.backgroundColor = "hsl(212, 23%, 69%)";
    }
    else{
        document.getElementById("name").style.display = "flex";
        document.getElementById("shareLinks").style.display = "none";
        document.getElementById("nameAndOrLinks").style.backgroundColor = "white";
        document.getElementById("nameAndOrLinks").style.display = "inline-block";
        button.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
});

button2.addEventListener("click", function(){
    document.getElementById("shareLinks").style.display = "none";
    document.getElementById("name").style.display = "flex";
    document.getElementById("nameAndOrLinks").style.display = "inline-block";
    document.getElementById("nameAndOrLinks").style.backgroundColor = "white";
    button2.style.display = "none";
    button.style.display = "inline";
});