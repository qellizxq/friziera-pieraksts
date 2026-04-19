console.log("JS pieslēgts un darbojas");

function reserve() {
    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let result = document.getElementById("result");

    // Validācija
    if (name === "" || service === "" || date === "") {
        result.innerHTML = "❌ Lūdzu aizpildi visus laukus!";
        result.style.color = "red";
        return;
    }

    // Funkcija ar parametriem
    function formatReservation(n, s, d) {
        return `✔ ${n}, tu esi pierakstīts uz ${d}. Cena: ${s}€`;
    }

    result.innerHTML = formatReservation(name, service, date);
    result.style.color = "green";
}