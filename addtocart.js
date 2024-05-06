const product = [
    {
        id: 0,
        image: 'img/sp1.png',
        title: 'Samg Package 1',
        price: 299,
        details: [
            "Chicken (Unlimited)",
            "Ssamjang (Unlimited)",
            "Gochujang (Unlimited)",
            "Cheese (Unlimited)",
            "Kimchi (Unlimited)",
            "Lettuce (Unlimited)"
        ]
    },
    {
        id: 1,
        image: 'img/sp2.jpeg',
        title: 'Samg Package 2',
        price: 299,
        details: [
            "Beef (Unlimited)",
            "Soybean Paste (Unlimited)",
            "Chili Paste (Unlimited)",
            "Rice Cake (Unlimited)",
            "Bean Sprouts (Unlimited)",
            "Green Onions (Unlimited)"
        ]
    },
    {
        id: 2,
        image: 'img/sp3.jpg',
        title: 'Samg Package 3',
        price: 299,
         details: [
            "Flavor Pork (Unlimited)",
            "Ssamjang (Unlimited)",
            "Gochujang (Unlimited)",
            "Cheese (Unlimited)",
            "Kimchi (Unlimited)",
            "Lettuce (Unlimited)"
        ]
    },
    {
        id: 3,
        image: 'img/sp4.jpeg',
        title: 'Hotpot Ramen',
        price: 99,
         details: [
            "Egg",
            "Spring Onion",
            "Chicken",
            "Seaweed",
        ]
    },
    {
        id: 4,
        image: 'img/sp5.jpeg',
        title: 'Takushima Ramen',
        price: 99,
         details: [
			"Pork",
			"Fish cake",
			"spring Onion",
			"Korean Fish ball",
        ]
    },
    {
        id: 5,
        image: 'img/sp6.jpg',
        title: 'Kitakata Ramen',
        price: 99,
         details: [
            "Egg",
            "Spring Onion",
            "Chicken",
            "Seaweed",
        ]
    },
    {
        id: 6,
        image: 'img/sp7.png',
        title: 'Temaki',
        price: 250,
    },
    {
        id: 7,
        image: 'img/sp8.jpeg',
        title: 'Makizushi',
        price: 250,
    },
    {
        id: 8,
        image: 'img/sp9.jpeg',
        title: 'Uramaki',
        price: 250,
    }
];

var cart = [];

function addToCart(productId) {
    cart.push({...product[productId]});
    displayCart();
}

function delElement(index) {
    cart.splice(index, 1);
    displayCart();
}

function toggleDetails(productId) {
    const detailsElement = document.getElementById(`details-${productId}`);
    if (detailsElement) {
        if (detailsElement.style.display === 'none') {
            detailsElement.style.display = 'block';
        } else {
            detailsElement.style.display = 'none';
        }
    }
}

function displayCart() {
    let total = 0;
    const cartItemElement = document.getElementById("cartItem");
    cartItemElement.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${item.image}>
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <h2 style='font-size: 15px;'>₱ ${item.price}.00</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            </div>`;
    }).join('');
    document.getElementById("total").innerHTML = "₱ " + total.toFixed(2);
    document.getElementById("count").innerHTML = cart.length;
}

function createProductCards(products) {
    return products.map(product => {
        const { id, image, title, price, details } = product;
        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src='${image}'></img>
                </div>
                <div class='bottom'>
                    <div id='details-${id}' class='details' style="display: none;">
                        <div class="floating-details">
                            ${details ? details.map(detail => `<div class="detail-item">${detail}</div>`).join('') : ''}
                        </div>
                    </div>
                    <p class="title product-title" data-id="${id}" onclick="toggleDetails(${id})">${title}</p>
                    <h2>₱ ${price}.00</h2>
                    <button onclick='addToCart(${id})'>Add to cart</button>
                </div>
            </div>`;
    }).join('');
}

document.getElementById('root').innerHTML = createProductCards(product);
displayCart();
