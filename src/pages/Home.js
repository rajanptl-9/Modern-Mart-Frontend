import React from 'react';
const img1 = require('../images/img1.jpg');
const img2 = require('../images/img2.jpg');
const img3 = require('../images/img3.jpg');
const { Link } = require('react-router-dom');
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 rounded-3 p-0">
              <div className="main-banner p-3 position-relative">
                <img src={img1} alt="banner" className='image-fluid rounded-3' height={400} width={600} />
                <div className="main-banner-content position-absolute">
                  <h5>SUPERCHARGED BY PROS.</h5>
                  <h2>lPad P53 Pro Max</h2>
                  <h5>FROM $999 to $41.63/mo</h5>
                  <h5>For 24 mon</h5>
                  <div className="button button-primary"></div>
                  <button type="button" className="btn btn-primary rounded-5 banner-button"><Link className='text-white'>Buy Now</Link></button>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex flex-wrap justify-content-evenly align-items-center">
            <div className="small-banner position-relative">
                <img src={img2} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>BEST SALE</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM $999 to $41.63/mo</h6>
                  <h6>For 24 mon</h6>
                  <div className="button button-primary"></div>
                  {/* <button type="button" className="btn btn-primary rounded-5 banner-button"><Link className='text-white'>Buy Now</Link></button> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img3} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>NEW ARRIVAL</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM $999 to $41.63/mo</h6>
                  <h6>For 24 mon</h6>
                  <div className="button button-primary"></div>
                  {/* <button type="button" className="btn btn-primary rounded-5 banner-button"><Link className='text-white'>Buy Now</Link></button> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img2} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>15% OFF</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM $999 to $41.63/mo</h6>
                  <h6>For 24 mon</h6>
                  <div className="button button-primary"></div>
                  {/* <button type="button" className="btn btn-primary rounded-5 banner-button"><Link className='text-white'>Buy Now</Link></button> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img3} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>FREE ENGRAVING</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM $999 to $41.63/mo</h6>
                  <h6>For 24 mon</h6>
                  <div className="button button-primary"></div>
                  {/* <button type="button" className="btn btn-primary rounded-5 banner-button"><Link className='text-white'>Buy Now</Link></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;