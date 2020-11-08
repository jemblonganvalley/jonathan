const Hero = () => {
  return `
        <section class='hero'>
            <div class='hero_banner'>

                <div class='hero_banner_left'>
                    <img src='../../assets/jam.png' class='hero_banner_image'/>
                </div>

                <div class='hero_banner_right'>
                    <h1>WAY KAMBAS MINI EBONY</h1>
                    <hr />
                    <p>
                        MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.
                    </p>
                    <a href='/discover'>
                        Discovery
                    </a>
                    
                    <div class='hero_banner_button_group'>

                        <button class='hero_banner_button button_solid'>
                            <img src='../../assets/cart.svg' width='30px'/>
                            <h3>add to cart</h3>
                        </button>

                        <button class='hero_banner_button button_outline'>
                            <h3>Preview</h3>
                        </button>

                    </div>

                </div>

                <img src='../../assets/flash.svg' class='flash_image'/>

            </div>
        </section>


    `;
};

export default Hero;
