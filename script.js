// script.js
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const order = document.getElementById('order').value;
    
    // Format pesan WhatsApp
    const message = `Halo, OB. Saya ${name} membutuhkan:\n\n${order}\n\nHubungi saya di ${phone}.`;
    
    // Link WhatsApp
    const whatsappUrl = `https://wa.me/628xxxxxxx?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
