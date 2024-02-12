const products = [
  {
    prise: "44.50$",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    images: ["../../assets/images/products-all/1.png"],
    button: "В корзину",
    link: "back to card",
  },
  // {
  //   prise: "44.50$",
  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  //   images: [
  //     "../assets/images/products-all/2.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
  // {
  //   id: 3,
  //   prise: "159,99$",

  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  //   images: [
  //     "../assets/images/products-all/3.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
  // {
  //   id: 4,
  //   prise: "49,39$",
  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  //   images: [
  //     "../assets/images/products-all/4.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
  // {
  //   id: 5,
  //   prise: "77,99$",

  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",

  //   images: [
  //     "../assets/images/products-all/5.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
  // {
  //   id: 6,
  //   prise: "159,99$",

  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  //   images: [
  //     "../assets/images/products-all/3.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
  // {
  //   id: 7,
  //   prise: "599.99$",
  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",

  //   images: [
  //     "../assets/images/products-all/1.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
  // {
  //   id: 8,
  //   prise: "49,39$",

  //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12» ",
  //   images: [
  //     "../assets/images/products-all/4.png",
  //     "../assets/images/products-all/star1.png",
  //   ],
  //   button: "В корзину",
  // },
];

const productCards = document.querySelector(`.cards`);
function displayProducts(products) {
  let str = ``;
  products.forEach((product) => {
    str += `
      <div class="card">
      <img src="${product.images[0]}"/>
      <p>${product.prise}</p>
      <h3>${product.description}</h3>
      <button>${product.button}</button>
      <a href="../../pages/tovar.html">${product.link}</a>
      </div>



    `;
  });
  productCards.innerHTML = str;
}

displayProducts(products);
