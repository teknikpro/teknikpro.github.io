function getData(){
    fetch(`https://www.dfunstation.com/api4/android/index.php/product/daftar`)
    .then(response => response.json())
    .then(produk => {
        
        const listProduk = produk.datalist;
        let daftarProduk = '';
        listProduk.forEach( p => {
            daftarProduk += `
            <tr>
                <td>${p.nomor}</td>
                <td>
                    <img src="${p.gambar}" class="img-thumbnail" alt="${p.nama_product}" >
                </td>
                <td>${p.nama_product}</td>
                <td>
                    <a href="link-daftar.html?id=${p.enkripsi}" class="btn btn-primary" >Link Produk</a>
                </td>
                <td><span class="badge text-bg-primary">publish</span></td>
                <td>
                    <a href="" class="btn btn-warning">ubah</a>
                    <a href="" class="btn btn-danger">Hapus</a>
                </td>
        </tr>
            `;
        });

        const cardProduk = document.querySelector('#card-produk');
        cardProduk.innerHTML = daftarProduk;

    });
}

getData();