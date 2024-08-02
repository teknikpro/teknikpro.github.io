const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const idProduk = urlParams.get("id");

const judulHalaman = document.getElementById('judul-halaman');

function getData(){
  fetch(`https://www.dfunstation.com/api4/android/index.php/product/daftarlink/${idProduk}`)
  .then(response => response.json())
  .then(produk => {

      // ganti judul
      judulHalaman.innerHTML = produk.namaproduct;

  });
}


$(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault(); // Mencegah pengiriman formulir secara normal
      
      var formData = $(this).serialize(); // Mengambil data formulir
      
      $.ajax({
        type: 'POST',
        url: `https://www.dfunstation.com/api4/android/index.php/product/tambahlink/${idProduk}`, // Ganti dengan URL yang sesuai dengan script PHP Anda
        data: formData,
        success: function(response) {
          alert('Data berhasil ditambahkan!'); // Menampilkan pesan sukses
          location.href = `link-daftar.html?id=${idProduk}`;
          // location.reload();
          // Lakukan tindakan tambahan setelah data ditambahkan, jika diperlukan
        },
        error: function() {
          alert('Terjadi kesalahan. Data gagal ditambahkan.'); // Menampilkan pesan kesalahan
        }
      });
    });
  });

  getData();