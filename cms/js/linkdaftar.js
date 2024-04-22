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
                    <a href="" class="btn btn-danger">Hapus</a>
                </td>
            </tr>
            `;
        });

        const cardProduk = document.querySelector('#daftar-link');
        cardProduk.innerHTML = cardLink;


    });
}

getData();
