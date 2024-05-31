import React, { useEffect, useState } from 'react';
import { FaTruckFast, FaGift, FaHeadphonesSimple, FaCreditCard } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import Marquee from "react-fast-marquee";
import CategoryCard from '../components/CategoryCard';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import FeatureProduct from '../components/FeatureProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProduct } from '../features/product/productSlice';
import SpecialProducts from '../components/SpecialProducts';
import { ToastContainer } from 'react-toastify';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const img1 = require('../images/img1.jpg');
const img2 = require('../images/img2.jpg');
const img3 = require('../images/img3.jpg');
const img4 = require('../images/img4.jpeg');
const img5 = require('../images/img5.jpeg');
const headphone = require('../images/headphonec.jpeg')
const mobile = require('../images/mobile.jpg');
const tv = require('../images/tv.jpeg');
const watch = require('../images/watch.png');
const laptop = require('../images/laptop.jpg');
const samsung = require('../images/samsung.jpg');
const apple = require('../images/apple.png');
const dell = require('../images/dell.jpg');
const hp = require('../images/hp.jpeg');
const asus = require('../images/asus.jpg');
const oneplus = require('../images/oneplus.jpg');
const fasttrack = require('../images/fastrack.jpeg');
const nothing = require('../images/nothing.png');
const redmi = require('../images/redmi.jpeg');
const { Link } = require('react-router-dom');
const Home = () => {
  const dispatch = useDispatch();
  const specialProducts = useSelector(state => state.product.specialProducts);
  const featuredProducts = useSelector(state => state.product.featuredProducts);
  const cartlist = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

  const [specialProduct, setSpecialProduct] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState([])

  useEffect(() => {    
    let featuredProduct = [];
    if (featuredProducts) {
      const list = featuredProducts;
      for (let i = 0; i < list.length; i++) {        
        const product = JSON.parse(JSON.stringify(list[i]));
        featuredProduct.push(product);
      }
      setFeaturedProduct(featuredProduct);
    }
    //eslint-disable-next-line
  }, [featuredProducts]);


  useEffect(() => {
    let specialProduct = [];
    if (specialProducts) {
      const list = specialProducts;      
      for (let i = 0; i < list.length; i++) {
        const product = JSON.parse(JSON.stringify(list[i]));
        if (cartlist) {
          product.selQunt = 1;
          product.isAdded = false;
          product.selcolor = product?.color[0]?._id;
          for (let i = 0; i < cartlist.length; i++) {
            if (cartlist[i]._id === product._id) {
              product.selQunt = cartlist[i].quantity;
              product.isAdded = true;
              product.selcolor = cartlist[i].color;
              break;
            }
          }
        }
        specialProduct.push(product);
      }
      setSpecialProduct(specialProduct);
    }
    //eslint-disable-next-line
  }, [specialProducts]);

  useEffect(() => {
    dispatch(getSpecificProduct({ tag: 'special', limit: 2 }));
    dispatch(getSpecificProduct({ tag: 'featured', limit: 4 }));
  },[dispatch]);

  return (
    <>
      <MetaTags title="Home | Modern Mart" />
      <BreadCrums page="Home" />
      <ToastContainer/>
      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="banner-container row d-flex justify-content-between p-0">
            <div className="large-banner-container col-6 rounded-3 p-0">
              <div className="main-banner p-3 position-relative">
                <img src={img1} alt="banner" className='image-fluid rounded-3' height={400} width={600} />
                <div className="main-banner-content position-absolute text-white">
                  <h5>SUPERCHARGED BY PROS.</h5>
                  <h2>Macbook Pro Max</h2>
                  <h5>FROM ₹99999</h5>
                  <div style={{width:"fit-content"}}><Link to={"/our-store/66237603092605028b263329"} className='button-inverse d-flex align-items-center gap-8'><span>Go</span> <FaRegArrowAltCircleRight /></Link></div>
                </div>
              </div>
            </div>
            <div className="small-banner-container col-6 d-flex justify-content-evenly align-items-center">
              <div className="small-banner position-relative">
                <img src={img2} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute text-danger">
                  <h6>BEST SALE</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM ₹1599 </h6>
                  <div style={{width:"fit-content"}}><Link to={"/our-store?cat=66237603092605028b263329"} className='button-inverse d-flex align-items-center gap-1' style={{ fontSize: "10px", padding:"8px 10px"}}><span>Go</span> <FaRegArrowAltCircleRight /></Link></div>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img3} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute">
                  <h6>NEW ARRIVAL</h6>
                  <h4>lPad P53 Pro Max</h4>
                  <h6>FROM ₹26999 </h6>
                  <div style={{width:"fit-content"}}><Link to={"/our-store?cat=65a01ff7b5279694e20d5fc7"} className='button-inverse d-flex align-items-center gap-1' style={{ fontSize: "10px", padding:"8px 10px"}}><span>Go</span> <FaRegArrowAltCircleRight /></Link></div>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img4} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute text-white">
                  <h6 className='text-info'>15% OFF</h6>
                  <h4>Samsung QLED 52'</h4>
                  <h6>FROM ₹56999</h6>
                  <div style={{width:"fit-content"}}><Link to={"/our-store?cat=6609e3881538edaad06d2fd7"} className='button-inverse d-flex align-items-center gap-1' style={{ fontSize: "10px", padding:"8px 10px"}}><span>Go</span> <FaRegArrowAltCircleRight /></Link></div>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={img5} alt="banner" className='image-fluid rounded-3' height={180} width={280} />
                <div className="small-banner-content position-absolute text-warning">
                  <h6 className='text-dark'>FREE ENGRAVING</h6>
                  <h4>Noise Series 6</h4>
                  <h6>FROM ₹3799</h6>
                  <div style={{width:"fit-content"}}><Link to={"/our-store?cat=65f6e7a648a9a13da628e68d"} className='button-inverse d-flex align-items-center gap-1' style={{ fontSize: "10px", padding:"8px 10px"}}><span>Go</span> <FaRegArrowAltCircleRight /></Link></div>
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
                <CategoryCard title="Laptop" _id="662374b0092605028b263318" desc="1 Item/s" img={laptop} height={90} width={130} />
                <CategoryCard title="Mobile" _id="65a01ff7b5279694e20d5fc7" desc="1 Item/s" img={mobile} height={70} width={76} />
                <CategoryCard title="TV" _id="6609e3881538edaad06d2fd7" desc="1 Item/s" img={tv} height={80} width={130} />
                <CategoryCard title="Smart Watch" _id="65f6e7a648a9a13da628e68d" desc="1 Item/s" img={watch} height={80} width={80} />
                <CategoryCard title="HeadPhone" _id="65f6e7bb48a9a13da628e68f" desc="1 Item/s" img={headphone} height={90} width={90} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {featuredProduct && <section className="home-wrapper-5 py-3">
        <div className="container-xxl flex-column align-items-center">
          <div className="row"><h4 className='fw-bold'>Featured Collection</h4></div>
          <div className="row">
            <div className="feature-card-container pb-3 col-12 d-flex align-items-center overflow-x-scroll">
              {featuredProduct.map((product, index) => <FeatureProduct key={product.slug + index} data={product} />)}
            </div>
          </div>
        </div>
      </section>}
      {specialProduct && <section className="home-wrapper-5 py-3">
        <div className="container-xxl flex-column align-items-center">
          <div className="row"><h4 className='fw-bold'>Special Products</h4></div>
          <div className="row">
            <div className="special-card-container pb-3 col-12 d-flex align-items-center overflow-x-scroll">
              {specialProduct.map((product, index) => <SpecialProducts key={product.slug + index} data={product} />)}
            </div>
          </div>
        </div>
      </section>}
      <section className="home-wrapper-4 pt-3">
        <div className="container-fluid px-0 mx-0">
          <div className="row w-100 mx-0">
            <div className="col-12 px-0">
              <h4 className='fw-bold text-center'>Brands Available On Our Shop</h4>
              <div className="marque-inner-wrapper card-wrapper py-3 bg-white">
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
                  <div>
                    <img src={fasttrack} alt="fasttrack" height={120} width={250} />
                  </div>
                  <div>
                    <img src={nothing} alt="nothing" height={130} width={260} />
                  </div>
                  <div className='mx-3'>
                    <img src={redmi} alt="redmi" height={70} width={160} />
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