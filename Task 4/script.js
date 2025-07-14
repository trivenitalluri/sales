const products = [
  { name: "Smartphone", category: "electronics", price: 15000, image: "https://via.placeholder.com/200" },
  { name: "T-shirt", category: "clothing", price: 500, image: "https://via.placeholder.com/200" },
  { name: "Laptop", category: "electronics", price: 50000, image: "https://via.placeholder.com/200" },
  { name: "Jeans", category: "clothing", price: 1200, image: "https://via.placeholder.com/200" }
];

function displayProducts(productArray) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  productArray.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;
    productList.appendChild(card);
  });
}

document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("sortPrice").addEventListener("change", sortProducts);

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const sortOrder = document.getElementById("sortPrice").value;
  let sorted = [...products];

  if (sortOrder === "asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}

// Initial display
displayProducts(products);
