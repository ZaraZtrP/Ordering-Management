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

    // Tampilkan pesan konfirmasi di halaman
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
    confirmationMessage.innerHTML = `Pesanan Anda terkirim ke Mas X dengan rincian sebagai berikut:<br><br>` +
                                    `<strong>Nama:</strong> ${name}<br>` +
                                    `<strong>Nomor Telepon:</strong> ${phone}<br>` +
                                    `<strong>Detail Pesanan:</strong> ${order}`;

    // Reset form setelah pengiriman
    document.getElementById('orderForm').reset();
});
