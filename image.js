document.getElementById('generateBtn').addEventListener('click', function() {
    const description = document.getElementById('description').value.trim();

    if (!description) {
        alert('Silakan masukkan deskripsi gambar!');
        return;
    }

    // Simulasi generasi gambar
    generateImage(description);
});

function generateImage(description) {
    const imageResult = document.getElementById('imageResult');

    // Clear previous result
    imageResult.innerHTML = 'Menghasilkan gambar...';

    // Simulasi waktu tunggu untuk menghasilkan gambar (misalnya, menggunakan API di masa depan)
    setTimeout(function() {
        // Hasil gambar simulasi
        imageResult.innerHTML = `<img src="https://placeimg.com/400/300/any" alt="Generated Image" />`;
    }, 2000); // Gambar muncul setelah 2 detik
}
