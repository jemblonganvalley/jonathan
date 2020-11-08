const Navbar = () => {
  return `
        <nav class='navbar'>
            <a class='brand' href='/'>
                <img src='../../assets/icon.png' width='30px'/>
                <h3>JONATHAN</h3>
            </a>

            <div class='menu'>
                <a href='watch.html'>watch</a>
                <a href='eyewear.html'>eyewear</a>
                <a href='accesories.html'>accesories</a>
                <a href='news.html'>news</a>
            </div>

            <div class='left_menu'>
                <img src='../../assets/search.svg' width='20px' />
                <div class='login'>
                    <img src='../../assets/user.svg' width='20px' />
                    <h4>Login</h4>
                </div>
            </div>

        </nav>
    `;
};

export default Navbar;
