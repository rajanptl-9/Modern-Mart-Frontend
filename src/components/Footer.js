import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import cards from "../images/cards.svg"

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  };

  return (
    <>
      {/* <footer className='py-4'>
        <div className='py-2'>
          <div className="container-xxl">
            <div className="row">
              <div className='news-letter-footer d-flex'>
                <div className="footer-upper d-flex">
                  <div><GrSend className='fs-3 me-2' /></div>
                  <div className=''> Sign Up for Newsletter</div>
                </div>
                <div className="input-group news-signup-footer">
                  <input type="text" className="form-control py-1 bg-white" placeholder="Your E-mail address..." aria-label="Your E-mail address..." aria-describedby="basic-addon2" />
                  <span className="input-group-text p-2" id="subscribe">Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className="link-container-footer row d-flex flex-wrap justify-content-between">
            <div className="link-menu-footer">
              <h4>Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address>Project Store<br /> No.123, XYZ Mall, Gujarat, 987654<br />India
                </address>
                <a href="tel:+919873214560" className='text-white mb-2 mt-2'>(+91) 987-321-4560</a>
                <a href="mailto:modernmart.noreply@gmail.com" className='text-white mb-2 mt-2'>modernmart.noreply@gmail.com</a>
                <div className="social-profiles mt-3">
                  <Link to="/" className='text-white'><BsFacebook className='fs-2 me-3' /></Link>
                  <Link to="/" className='text-white'><AiFillTwitterCircle className='fs-1 me-3' /></Link>
                  <Link to="/" className='text-white'><BsLinkedin className='fs-2 me-3' /></Link>
                  <Link to="/" className='text-white'><FaGithub className='fs-2 me-3' /></Link>
                  <Link to="/" className='text-white'><FaYoutube className='fs-1 me-3' /></Link>
                </div>
              </div>
            </div>
            <div className="link-menu-footer">
              <h4>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"/privacy-policy"} onClick={() => scrollToTop()} className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to={"/refund-policy"} onClick={() => scrollToTop()} className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to={"/shopping-policy"} onClick={() => scrollToTop()} className='text-white py-2 mb-1'>Shopping Policy</Link>
                <Link to={"/terms-and-conditions"} onClick={() => scrollToTop()} className='text-white py-2 mb-1'>Terms & Services</Link>
                {/* <Link className='text-white py-2 mb-1'>Blogs</Link> */}
              </div>
            </div>
            <div className="link-menu-footer">
              <h4>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1' onClick={() => scrollToTop()}>Search</Link>
                <Link className='text-white py-2 mb-1' onClick={() => scrollToTop()} to={"/about"}>About Us</Link>
                {/* <Link className='text-white py-2 mb-1'>Faq</Link> */}
                <Link className='text-white py-2 mb-1' onClick={() => scrollToTop()} to={"/contact"}>Contact</Link>
                {/* <Link className='text-white py-2 mb-1'>Size Chart</Link> */}
              </div>
            </div>
            <div className="link-menu-footer">
              <h4>Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1' to={"/our-store?cat=66537c35c0d48aaad379c0ad"}>Laptops</Link>
                <Link className='text-white py-2 mb-1' to={"/our-store?cat=66537c1dc0d48aaad379c0a4"}>Headphones</Link>
                <Link className='text-white py-2 mb-1' to={"/our-store?cat=66537c12c0d48aaad379c0a1"}>Tablets</Link>
                <Link className='text-white py-2 mb-1' to={"/our-store?cat=66537c0cc0d48aaad379c09e"}>Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='py-2'>
          <div className="container-xxl">
            <div className="row">
              <div className="site-details-footer col-12 d-flex justify-content-between">
                <div className="d-flex d-inline">
                  <p className='mb-0'>&copy; {new Date().getFullYear()}; Powered By Modern Mart</p>
                </div>
                <div className="card-images-footer d-flex d-inline">
                  <img src={cards} alt="cards" height={40} width={400}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;