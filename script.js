const products = [
    { id: 1, name: "Wireless Headphones!", price: 99, img: "https://imgs.search.brave.com/9qo_9dgNFVz9_7zdp5SF509hTAxQBCfNzm2O7Ci1B7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1LzA5/LzZhLzI1MDk2YWY4/ODQwZDY1ZDRmZTRl/MWE2MzliZDczYWM3/LmpwZw" },
    { id: 2, name: "Smart Watch", price: 149, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Bluetooth Speaker", price: 49, img: "https://via.placeholder.com/150" },
];

let cart = [];

// 1. Render Products
const productList = document.getElementById('product-list');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
});

// 2. Cart Functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateUI();
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const list = document.getElementById('cart-items');
    list.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });
    document.getElementById('cart-total').innerText = total;
}

function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('hidden');
}
