function showMessage() {
    document.getElementById("messageBox").classList.add("show");
    document.getElementById("pageBody").style.backgroundColor = "#ffccdd"; 
    document.getElementById("gif").style.display = "block"; 

    setTimeout(function() {
        document.getElementById("tiktokButton").classList.add("show");
    }, 15000); // Espera 10 segundos para mostrar o botão do TikTok
}
