const loginForm = document.getElementById(`login-form`);
const toggleBtn = document.getElementById("toggle");

toggleForm.addEventListener(`click`, function (e) {
  loginForm.classList.toggle(`open`);
});

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

const products = [
  {
    prise: "44.50$",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    images: [
      "../assets/images/products-all/1.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    prise: "44.50$",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    images: [
      "../assets/images/products-all/2.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    id: 3,
    prise: "159,99$",

    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    images: [
      "../assets/images/products-all/3.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    id: 4,
    prise: "49,39$",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    images: [
      "../assets/images/products-all/4.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    id: 5,
    prise: "77,99$",

    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",

    images: [
      "../assets/images/products-all/5.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    id: 6,
    prise: "159,99$",

    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    images: [
      "../assets/images/products-all/3.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    id: 7,
    prise: "599.99$",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",

    images: [
      "../assets/images/products-all/1.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
  {
    id: 8,
    prise: "49,39$",

    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12» ",
    images: [
      "../assets/images/products-all/4.png",
      "../assets/images/products-all/star1.png",
    ],
    button: "В корзину",
  },
];
const cards = document.querySelector(`.cards`);

function displayProducts(products) {
  let str = ``;
  products.forEach((product) => {
    str += `
        <div class ="card">
        <img src=${product.images[0]} />
       <div class="card-content">
        <h3>${product.prise}</h3>
        <p>${product.description}</p>
        <div class=""star >
        <img src=${product.images[1]} />
        </div>
        <button class="btn">${product.button}</button>
       </div>
        </div>

    `;
  });
  cards.innerHTML = str;
}
displayProducts(products);
