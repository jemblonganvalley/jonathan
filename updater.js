import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Product from "./components/product/Product.js"

const updater = () => {
  document.getElementById("root").innerHTML = `
        ${Navbar()}
        ${Hero()}
        ${Product()}
    `;
};

updater();

export default updater;
