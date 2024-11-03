// script.js
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const order = document.getElementById('order').value;

    // Format pesan untuk WhatsApp
    const message = `Halo, saya ingin memesan kebutuhan karyawan berikut:\n\n` +
                    `Nama: ${name}\n` +
                    `Nomor Telepon: ${phone}\n` +
                    `Detail Pesanan: ${order}`;

    // Encode URL untuk pengiriman
    const whatsappUrl = `https://wa.me/083182068209?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp dengan URL yang sudah diencode
    window.open(whatsappUrl, '_blank');
});
