const button = document.getElementById("share");

button.addEventListener("click", function(){
    document.getElementById("shareLinks").style.display = "block";
    document.getElementById("name").style.display = "none";
    document.getElementById("nameAndOrLinks").style.backgroundColor = "hsl(217, 19%, 35%)";
    document.getElementById("nameAndOrLinks").style.color = "white";
});