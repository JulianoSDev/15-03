function showMessage() {
    document.getElementById("messageBox").classList.add("show");
    document.getElementById("pageBody").style.backgroundColor = "#ffccdd"; // Fundo rosa claro
    document.getElementById("gif").style.display = "block"; // Exibe o GIF

    
    setTimeout(() => {
        document.querySelector(".tiktok-button").style.display = "block";
    },  25300); 
}
