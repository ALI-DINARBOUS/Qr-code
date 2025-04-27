document.getElementById("button").addEventListener("click", function() {
    let texte = document.getElementById("text").value;

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texte: texte })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("qrCode").src = data.qrCode;
        document.getElementById("qrCode").style.display = "block";
    })
    .catch(error => {
        console.error("Erreur lors de la requête fetch :", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    });
});
