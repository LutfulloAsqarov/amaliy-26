const product = document.querySelector(".product");

const API_URL = "https://66289a1f54afcabd073644cb.mockapi.io/shop/products";

async function fetchData(url) {
    let param = new URLSearchParams(window.location.search);
    let id = param.get("id");
    let data = await fetch(`${url}/${id}`);
    data.json()
        .then((res) => createCard(res))
        .catch((err) => console.log(err));
}
fetchData(API_URL);

function createCard(data) {
    product.innerHTML = `
        <div>
            <img src='${data.img}' alt=''/>
        </div>
        <div>
            <h3 class="title">Name: ${data.name}</h3>
            <p class="desc">Info: ${data.info}</p>
            <p class="desc">Size: ${data.size}</p>
            <p class="desc">${data.unit}</p>
            <p class="desc">${data.price}</p>
        </div>
    `;
}
