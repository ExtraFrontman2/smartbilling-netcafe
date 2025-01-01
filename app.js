document.getElementById('calculate').addEventListener('click', function() {
    const hours = document.getElementById('hours').value;
    const ratePerHour = 5000; // Tarif per jam
    const total = hours * ratePerHour;
    document.getElementById('total').textContent = 'Rp ' + total.toLocaleString();
});
