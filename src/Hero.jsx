 
    import shoes0 from './assets/img/01.JPG'
    import shoes1 from './assets/img/02.JPG'
    import shoes2 from './assets/img/03.JPG'
    import shoes3 from './assets/img/04.JPG'
    const Hero = () => {
        return (
            <>
            <section className="hero-section mt-5">
                <div className="hero-content text-start">
                    <h4 className='heading  text-white'>Explore Limited Edition</h4>
                    <h1>NIKE LIMITED  EDITION</h1>
                    <p>
                        Unleash the extraordinary. Elevate your game with Nike's Limited Edition. 
                        Where innovation meets style, leaving a lasting mark. Just do it.
                    </p>
                  <a className='btn btn-default theme-btn'>Shop Now</a>
                </div>
                <div className="hero-products">
                    <div className="product-card">
                        <img src={shoes0} alt="Nike Air Max 1" />
                        <div className="product-details">
                            <h3>Nike Air Max 1</h3>
                            <div className="d-flex justify-content-between">
                            <p>Men's Shoes</p>
                            <p>Color: White</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={shoes1} alt="Nike Air Peg 2K5" />
                        <div className="product-details">
                            <h3>Nike Air Peg 2K5</h3>
                            <div className="d-flex justify-content-between">
                            <p>Men's Shoes</p>
                            <p>Color: White</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src={shoes2} alt="Nike Lunar Racer" />
                        <div className="product-details">
                            <h3>Nike Lunar Racer</h3>
                            <div className="d-flex justify-content-between">
                            <p>Men's Shoes</p>
                            <p>Color: White</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <img src={shoes3} alt="Nike Lunar Racer" />
                        <div className="product-details">
                            <h3>Nike Lunar Racer</h3>
                            <div className="d-flex justify-content-between">
                            <p>Men's Shoes</p>
                            <p>Color: White</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
    
export default Hero;