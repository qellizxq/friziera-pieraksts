// Cenu saraksts objektā (papildu uzdevums!)
const priceList = {
    griesana: 15,
    krasosana: 40,
    ieveidošana: 20
};

// Funkcija rezervācijai
function bookService(service) {
    const result = document.getElementById("result");

    if (service === "") {
        result.textContent = "Lūdzu, izvēlies pakalpojumu!";
        result.style.color = "red";
    } else {
        const price = priceList[service];
        result.textContent = "Rezervācija veikta! Cena: " + price + " €";
        result.style.color = "green";
    }
}

// Notikums pogai
document.getElementById("bookBtn").addEventListener("click", () => {
    const selectedService = document.getElementById("service").value;
    bookService(selectedService);
});
