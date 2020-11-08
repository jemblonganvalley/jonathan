

const Product = () =>{
  return `
    <section class='product'>

      <div class='product_col'>

        <div class='product_col_1'>
          <p class='product_judul'>Maple Series</p>
          <hr width='30%' align="left" >
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 15.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Way Kambas Maple</p>
              <h3>Rp 1.280.000</h3>
            </div>
          </div>
          <div class='product_card' >
            <div class='product_img'>
            <img src='../../assets/image 21.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Kaili</p>
              <h3>Rp 950.000</h3>
            </div>
          </div>
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 16.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Sunda</p>
              <h3>Rp 1.170.000</h3>
            </div>
          </div>
        </div>

        <div class='product_col_2'>
          <p class='product_judul'>Ebony Series</p>
          <hr width='30%' align="left">
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 20.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Tomia Ebony</p>
              <p style="text-decoration: line-through red; padding:0; margin:0;" >Rp 1.280.000</p>
              <h3>Rp 960.000</h3>
            </div>
          </div>
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 22.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Mori</p>
              <h3>Rp 950.000</h3>
            </div>
          </div>
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 23.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Alor</p>
              <h3>Rp 1.170.000</h3>
            </div>
          </div>
        </div>

        <div class='product_col_3'>
          <p class='product_judul'>Featured</p>
          <hr width='30%' align="left">
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 17.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Sikka (Ebony & Maple)</p>
              <h3>Rp 1.198.000</h3>
            </div>
          </div>
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 18.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Lore Walnut</p>
              <h3>Rp 1.280.000</h3>
            </div>
          </div>
          <div class='product_card'>
            <div class='product_img'>
              <img src='../../assets/image 19.svg' width='60'/>
            </div>
            <div class='product_text'>
              <p class='product_text_nama'>Way Kambas <br> Limited Edition</p>
              <h3>Rp 1.170.000</h3>
            </div>
          </div>
        </div>

      </div>

      <button class='product_banner_button product_button_outline'>
          <h3>See More</h3>
      </button>

    </section>
  `
}

export default Product;