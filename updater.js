import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/Info/heroInfo/Hero.js";
import Infoproduk from "./components/Info/Infoproduk/Infoproduk.js";
import Footer from "./components/footer/Footer.js";
import Relate from "./components/Info/Relate/Relate_product.js";

const updater = () => {
  document.getElementById("root").innerHTML = `
        ${Navbar()}
        ${Hero()}
        ${Infoproduk()}
        ${Relate()}
        ${Footer()}
    `;
};
updater();

export default updater;
