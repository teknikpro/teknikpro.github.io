const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const idProduk = urlParams.get("id");

function getData(){
    fetch(`https://www.dfunstation.com/api4/android/index.php/product/detail/${idProduk}`)
    .then(response => response.json())
    .then(produk => {

        const detailProduk = `
            <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="gambar">
                    <img src="${produk.foto}" class="img-fluid img-thumbnail" alt="Gudang Jatek Karangtunggal">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class=" judul-produk">${produk.judul}</h3>
                <span class="deskripsi">Deskripsi</span>
                <div class="detail-deskripsi mt-3 d-produk" style="height: 700px;">
                    <p>${produk.deskripsi}</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="box-link border rounded-3 p-3 border-black" >
                    <h3 class="link-beli mb-4">Link Pembelian</h3>
                    <div id="card-link"></div>
                    
                </div>
            </div>
            </div>
        `;

        

        const listProduk = produk.link;
        let daftarLink = '';
        listProduk.forEach( l => {
            daftarLink += `
                <div class="d-grid gap-2 mb-3">
                <a href="${l.linkproduk}" class="btn btn-secondary d-produk">${l.toko}</a>
                </div>
            `;
        });
        
        const linkMobile = produk.link;
        let daftarLinMobile = '';
        linkMobile.forEach(l => {
            daftarLinMobile += `
            <div class="d-grid gap-2 mb-3">
                <a href="${l.linkproduk}" class="btn btn-secondary d-produk">${l.toko}</a>
            </div>
            `;
        });

        const cardProduk = document.querySelector('#detail-produk');
        cardProduk.innerHTML = detailProduk;

        const cardLink = document.querySelector('#card-link');
        cardLink.innerHTML = daftarLink;
        
        const cardLinkMobile = document.querySelector('#modal-body');
        cardLinkMobile.innerHTML = daftarLinMobile;

    });
}

getData();
