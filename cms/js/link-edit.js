const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const idProduk = urlParams.get("id");

const ecomerse = document.getElementById('ecommerce');
const isiLink = document.getElementById('link-produk');
const idlinkproduk = document.getElementById('idlinkproduk');

function getData(){
    fetch(`https://www.dfunstation.com/api4/android/index.php/product/editlink/${idProduk}`)
    .then(response => response.json())
    .then(linkproduk => {

        // ganti judul

        idlinkproduk.value = linkproduk.id_produck_link;
        ecomerse.value = linkproduk.toko;
        isiLink.value = linkproduk.link;
  
    });
  }

  $(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault(); 
      
      const formData = $(this).serialize(); 

      $.ajax({
        type: 'POST',
        url: `https://www.dfunstation.com/api4/android/index.php/product/updatelink`, 
        data: formData,
        success: function(response) {
          alert('Data berhasil diedit'); 
        },
        error: function() {
          alert('Terjadi kesalahan. Data gagal ditambahkan.'); 
        }
      });
    });
  });

  getData();
  