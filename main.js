const button = document.getElementById("share");

button.addEventListener("click", function(){
    if(document.getElementById("name").style.display !== "none" && screen.width <= 850){
        document.getElementById("shareLinks").style.display = "block";
        document.getElementById("name").style.display = "none";
        document.getElementById("shareLinks").style.backgroundColor = "hsl(217, 19%, 35%)";
        document.getElementById("shareLinks").style.color = "white";
    }else{
        document.getElementById("shareLinks").style.display = "none";
        document.getElementById("name").style.display = "flex";
    }
    
});