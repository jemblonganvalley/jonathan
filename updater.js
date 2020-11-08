import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Recent from "./components/RecentNews/Recent.js";
import Footer from "./components/footer/Footer.js";

const updater = () => {
  document.getElementById("root").innerHTML = `
        ${Navbar()}
        ${Hero()}
        ${Recent()}
        ${Footer()}
    `;
};
updater();

export default updater;
