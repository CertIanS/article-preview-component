const button = document.getElementById("share");

button.addEventListener("click", function(){
    document.getElementById("share").style.backgroundColor = "hsl(217, 19%, 35%)";
    document.getElementById("share").style.color = "white";
    if(document.getElementById("name").style.display !== "none" && screen.width <= 850){
        document.getElementById("shareLinks").style.display = "block";
        document.getElementById("name").style.display = "none";
        document.getElementById("shareLinks").style.backgroundColor = "hsl(217, 19%, 35%)";
        document.getElementById("shareLinks").style.color = "white";
    }else if(screen.width > 850){
        //code to show links will come later
    }
    else{
        document.getElementById("shareLinks").style.display = "none";
        document.getElementById("name").style.display = "flex";
    }
    
});