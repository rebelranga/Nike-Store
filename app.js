const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://i5.walmartimages.com/asr/81135b37-a3ad-4b53-ba70-5cdf325a8ee4_1.ddd78e2504d87ec1c4067a33a5489ee1.jpeg",
      },
      {
        code: "darkblue",
        img: "https://tse3.mm.bing.net/th?id=OIP.SlUOgcJdQ91baBGjj9JeyQHaHa&pid=Api&P=0",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://tse4.mm.bing.net/th?id=OIP.d-7UFbAaPsT2y3dYpaKm1AHaFb&pid=Api&P=0",
      },
      {
        code: "green",
        img: "https://tse4.mm.bing.net/th?id=OIP.H2fLee9TaIiCJrcyliuprwHaIq&pid=Api&P=0",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://wallpapercave.com/wp/3eaIVZM.jpg",
      },
      {
        code: "green",
        img: "https://tse4.mm.bing.net/th?id=OIP.H2fLee9TaIiCJrcyliuprwHaIq&pid=Api&P=0",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://tse3.mm.bing.net/th?id=OIP.twfrXBaS524g49C6dozi8wHaHa&pid=Api&P=0",
      },
      {
        code: "lightgray",
        img: "https://wallpapercave.com/wp/3eaIVZM.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://tse3.explicit.bing.net/th?id=OIP.lgWlO_J3syvD5GYbPOMtwQHaHa&pid=Api&P=0",
      },
      {
        code: "black",
        img: "https://i5.walmartimages.com/asr/81135b37-a3ad-4b53-ba70-5cdf325a8ee4_1.ddd78e2504d87ec1c4067a33a5489ee1.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});