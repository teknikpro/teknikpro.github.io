const cariList = document.querySelector("#form-cari");
cariList.addEventListener("keyup", pencarianList);


function pencarianList(e) {
    const filterText = e.target.value.toLowerCase();
    let todoItems = document.querySelectorAll(".list-produk");

    todoItems.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) != -1) {
            item.setAttribute("style", "display: block;");
        } else {

            item.setAttribute("style", "display: none !important");

        }

    });
}

function getData(){
    fetch(`https://www.dfunstation.com/api4/android/index.php/product/daftar`)
    .then(response => response.json())
    .then(produk => {
        
        const listProduk = produk.datalist;
        let daftarProduk = '';
        listProduk.forEach( p => {
            daftarProduk += `
            <div class="d-grid gap-2 col-lg-6 col-md-6 col-sm-12 mx-auto mb-3">
                    <a href="${p.linkproduct}" class="btn btn-secondary  rounded-pill d-produk list-produk" >
                        ${p.nomor} . ${p.nama_product}
                    </a>
                </div>
            `;
        });

        // yang pertama
        // listProduk.forEach( p => {
        //     daftarProduk += `
        //     <div class="d-grid gap-2 col-lg-6 col-md-6 col-sm-12 mx-auto mb-3">
        //             <a href="detail.html?action=read&id=${p.enkripsi}" class="btn btn-secondary  rounded-pill d-produk list-produk" >
        //                 ${p.nomor} . ${p.nama_product}
        //             </a>
        //         </div>
        //     `;
        // });

        const cardProduk = document.querySelector('#card-produk');
        cardProduk.innerHTML = daftarProduk;

    });
}

getData();


