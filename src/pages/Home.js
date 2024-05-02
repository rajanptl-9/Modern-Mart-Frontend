import React, { useEffect } from 'react';
import { FaTruckFast, FaGift, FaHeadphonesSimple, FaCreditCard } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import Marquee from "react-fast-marquee";
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import FeatureProduct from '../components/FeatureProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import SpecialProducts from '../components/SpecialProducts';
const img1 = require('../images/img1.jpg');
const img2 = require('../images/img2.jpg');
const img3 = require('../images/img3.jpg');
const camera = require('../images/camera.jpeg');
const tv = require('../images/tv.jpeg');
const watch = require('../images/watch.png');
const laptop = require('../images/laptop.jpg');
const gameremote = require('../images/gameremote.jpg');
const samsung = require('../images/samsung.jpg');
const apple = require('../images/apple.png');
const dell = require('../images/dell.jpg');
const hp = require('../images/hp.jpeg');
const asus = require('../images/asus.jpg');
const oneplus = require('../images/oneplus.jpg');
const { Link } = require('react-router-dom');

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product.products);
  const featuredProduct = [];
  if (productState) {
    for (let i = 0; i < productState.length && featuredProduct.length < 4; i++) {
      if (productState[i].tags && productState[i].tags.includes('featured')){        
        featuredProduct.push(productState[i]);
      }
    }
  }
  const specialProduct = [];
  if (productState) {
    for (let i = 0; i < productState.length && specialProduct.length < 2; i++) {
      if (productState[i].tags && productState[i].tags.includes('special')){       
        specialProduct.push(productState[i]);
      }
    }
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <MetaTags title="Home | Modern Mart" />
      <BreadCrums page="Home" />
      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="banner-container row d-flex justify-content-between p-0">
            <div className="large-banner-container col-6 rounded-3 p-0">
              <div className="main-banner p-3 position-relative">
                <img src={img1} alt="banner" className='image-fluid rounded-3' height={400} width={600} />
                <div className="main-banner-content position-absolute">
                  <h5>SUPERCHARGED BY PROS.</h5>
                  <h2>lPad P53 Pro Max</h2>
                  <h5>FROM ₹999 to ₹41.63/mo</h5>
                  <h5>For 24 mon</h5>
                  <div><Link className='button-inverse'>Buy Now</Link></div>
                </div>
              </div>
            </div>
            <div className="small-banner-container col-6 d-flex justify-content-evenly align-items-center">
              <div className="small-banner position-relative">
                <img src={img2} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>BEST SALE</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM ₹999 to ₹41.63/mo</h6>
                  <h6>For 24 mon</h6>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img3} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>NEW ARRIVAL</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM ₹999 to ₹41.63/mo</h6>
                  <h6>For 24 mon</h6>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img2} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>15% OFF</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM ₹999 to ₹41.63/mo</h6>
                  <h6>For 24 mon</h6>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img3} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>FREE ENGRAVING</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM ₹999 to ₹41.63/mo</h6>
                  <h6>For 24 mon</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex flex-wrap justify-content-around align-items-center flex-wrap">
                <div className="service d-flex">
                  <div className='d-flex justify-content-center align-items-center me-3'><FaTruckFast className='service-icon' /></div>
                  <div className="service-content d-flex flex-column justify-content-center"><b>Free Shipping</b>
                    <p className='mb-0'>From all order over ₹100</p>
                  </div>
                </div>
                <div className="service d-flex">
                  <div className='d-flex justify-content-center align-items-center me-3'><FaGift className='service-icon' /></div>
                  <div className="service-content d-flex flex-column justify-content-center"><b>Daily Surpise Offer</b>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className="service d-flex">
                  <div className='d-flex justify-content-center align-items-center me-3'><FaHeadphonesSimple className='service-icon' /></div>
                  <div className="service-content d-flex flex-column justify-content-center"><b>Support 24/7</b>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className="service d-flex">
                  <div className='d-flex justify-content-center align-items-center me-3'><BiSolidOffer className='service-icon' /></div>
                  <div className="service-content d-flex flex-column justify-content-center"><b>Affordable Price</b>
                    <p className='mb-0'>Get factory direct price</p>
                  </div>
                </div>
                <div className="service d-flex">
                  <div className='d-flex justify-content-center align-items-center me-3'><FaCreditCard className='service-icon' /></div>
                  <div className="service-content d-flex flex-column justify-content-center"><b>Secure Payment</b>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-around align-items-center py-2">
                <CategoryCard title="Laptops" desc="10 Items" img={laptop} height={100} width={150} />
                <CategoryCard title="Cameras" desc="10 Items" img={camera} height={70} width={100} />
                <CategoryCard title="Smart TVs" desc="10 Items" img={tv} height={80} width={130} />
                <CategoryCard title="Smart Watches" desc="10 Items" img={watch} height={80} width={80} />
                <CategoryCard title="Gaming" desc="10 Items" img={gameremote} height={60} width={110} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {featuredProduct && <section className="home-wrapper-5 py-3">
        <div className="container-xxl">
          <div className="row"><h4 className='fw-bold'>Featured Collection</h4></div>
          <div className="row">
            <div className="feature-card-container pb-3 col-12 d-flex align-items-center overflow-x-scroll">
              {featuredProduct.map((product, index) => <FeatureProduct key={product.slug + index} data={product} />)}
            </div>
          </div>
        </div>
      </section>}
      {specialProduct && <section className="home-wrapper-5 py-3">
        <div className="container-xxl">
          <div className="row"><h4 className='fw-bold'>Special Products</h4></div>
          <div className="row">
            <div className="special-card-container pb-3 col-12 d-flex align-items-center overflow-x-scroll">
              {specialProduct.map((product, index) => <SpecialProducts key={product.slug + index} data={product} />)}
            </div>
          </div>
        </div>
      </section>}
      <section className="home-wrapper-4 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className='fw-bold'>Brands Available On Our Shop</h4>
              <div className="marque-inner-wrapper card-wrapper p-3 bg-white">
                <Marquee className="d-flex align-items-center">
                  <div>
                    <img src={samsung} alt="samsung" height={120} width={280} />
                  </div>
                  <div>
                    <img src={apple} alt="apple" height={120} width={220} />
                  </div>
                  <div>
                    <img src={dell} alt="dell" height={160} width={170} />
                  </div>
                  <div>
                    <img src={hp} alt="hp" height={160} width={200} />
                  </div>
                  <div>
                    <img src={asus} alt="asus" height={80} width={200} />
                  </div>
                  <div>
                    <img src={oneplus} alt="oneplus" height={180} width={250} />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;