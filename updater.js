import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Product from "./components/product/Product.js"
import Testimonial from "./components/testmonial/Testimonial.js"
import Social from "./components/social/Social.js";

const updater = () => {
  document.getElementById("root").innerHTML = `
        ${Navbar()}
        ${Hero()}
        ${Product()}
        ${Testimonial()}
        ${Social()}
    `;
};

updater();

export default updater;
