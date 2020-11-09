const Hero = () => {
  return `
       <section class="heroInfo">
         <h5>Home / Product / Watch / <span style="color:red;">Way Kambas Mini Ebony</h5>
         </span>
    
       <!--Hero image -->
       <div style="display:flex">
          <div class="hero-col1">
            <h1>hai</h1>
            <div class="pink-box">

              <img src="../../../assets/jam1.png"/>
              <img src="../../../assets/jam2.png"/>
              <img src="../../../assets/jam3.png"/>
              <img src="../../../assets/jam4.png"/>
              
            </div>
            <div class="heroimg">
            
            <img src="../../../assets/jam.png"/>
            </div>
           
        </div>
        <div class="hero-col2">
          <h1 class="produk-title">WAY KAMBAS MINI EBONY</h1>
          <br/>
          <h3 style="color:#777777"><strike>Rp 1.280.000</strike></h3>
           <br/>
          <h1>1.024.000</h1>
          <br/>
        
          <div>
            <p>Choose Model</p>
           <img src="../../../assets/model1.svg"/>
           &nbsp;
           <img src="../../../assets/model2.svg"/>
          </div>


          <div class="order">
            <div class="qty-order">
            <img src="../../../assets/min.png" height="30" width="50"/>
            <h2>1</h2>
            <img src="../../../assets/plus.png" height="30" width="50"/>
            </div>

            
            <a class="button_solid" id="button">
            <img src="../../../assets/cart.svg">
            Add to cart
            </a>
            

            <a class="button_outline" id="button" style="background-color:white;">
            <img src="../../../assets/logo_cicil.png" >
            </a>


          </div>
        
        </div>

        </div>
       </section>

    `;
};

export default Hero;
