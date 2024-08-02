const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const idProduk = urlParams.get("id");

const linkTambah = document.getElementById('link-tambah');
const judulHalaman = document.getElementById('judul-halaman');


linkTambah.href = `link-tambah.html?id=${idProduk}`;

function getData(){
    fetch(`https://www.dfunstation.com/api4/android/index.php/product/daftarlink/${idProduk}`)
    .then(response => response.json())
    .then(produk => {

        // ganti judul
        judulHalaman.innerHTML = produk.namaproduct;

        const daftarLink = produk.datalist;
        let cardLink = '';
        daftarLink.forEach( p => {
            cardLink += `
            <tr>
                <td>${p.nomor}</td>
                <td>${p.toko}</td>
                <td>${p.link}</td>
                <td>
                ${p.publish === "1" ? `<span class="badge text-bg-primary">publish</span>` : `<span class="badge text-bg-danger">draft</span>`}
                </td>
                <td>
                    <a href="link-edit.html?id=${p.idlink}" class="btn btn-warning">ubah</a>
                    <button href="" id="button-hapus" class="btn btn-danger" onclick="confirmDelete(${p.idlink})">Hapus</button>
                </td>
            </tr>
            `;
        });

        const cardProduk = document.querySelector('#daftar-link');
        cardProduk.innerHTML = cardLink;


    });
}

getData();

function confirmDelete(id) {
    const konfirmasi = confirm("Apakah anda yakin ingin menghapus data ini");
    if(konfirmasi){
      $.ajax({
        type: 'POST',
        url: `https://www.dfunstation.com/api4/android/index.php/product/hapuslink/${id}`, 
        success: function(response) {
            if(response.status === "success"){
                alert(response.message);
                location.reload();
            }else {
                alert(response.message);
                location.reload();
            }
        },
        error: function() {
          alert('Terjadi kesalahan. Data gagal ditambahkan.'); 
        }
      });
    }else {
        alert("data gagal dihapus");
    }
}
