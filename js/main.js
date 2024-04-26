const wrapper = document.querySelector(".wrapper");

API_URL = "https://66289a1f54afcabd073644cb.mockapi.io/shop/products";

async function fetchData(url) {
    const data = await fetch(url, {
        method: "GET",
    });
    data.json()
        .then((res) => createCards(res))
        .catch((err) => console.log(err));
}

fetchData(API_URL);

function createCards(data) {
    console.log(data);
    let cards = "";
    data.forEach((product) => {
        cards += `
            <div class="card">
                <img src='${product.img}' alt=''/>
                <div>
                    <h3 class="title">${product.name}</h3>
                    <p class="desc">${product.info}</p>
                </div>
                <button class="see__more-btn" data-id=${product.id}> See more</button>
            </div>
        `;
    });
    wrapper.innerHTML = cards;
}

wrapper.addEventListener("click", (e) => {
    if (e.target.className === "see__more-btn") {
        let id = e.target.dataset.id;
        window.open(`./pages/card.html?id=${id}`, "_self");
    }
});
