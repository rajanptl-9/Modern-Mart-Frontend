import React from 'react';
import { GrSend } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='py-2'>
          <div className="container-xxl">
            <div className="row d-flex justify-content-start align-items-center">
              <div className="col-5">
                <div className="footer-upper d-flex gap-30 align-items-center">
                  <div><GrSend className='fs-3 me-2' /></div>
                  <div className='mb-0'> Sign Up for Newsletter</div>
                </div>
              </div>
              <div className="col-6">
                <div class="input-group">
                  <input type="text" className="form-control py-1 bg-white" placeholder="Your E-mail address..." aria-label="Your E-mail address..." aria-describedby="basic-addon2" />
                  <span class="input-group-text p-2" id="subscribe">Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </footer>
        <footer className='py-4'>
          <div className='container-xxl'>
            <div className="row">
              <div className="col-4">
                <h4>Contact Us</h4>
                <div className="footer-links d-flex flex-column">
                  <address className='mt-'>Project Store<br/> No.123, XYZ Mall, Gujarat, 987654<br/>India
                  </address>
                  <a href="tel:+919873214560" className='text-white mb-2 mt-2'>+91 9873214560</a>
                  <a href="mailto:modernmart.noreply@gmail.com" className='text-white mb-2 mt-2'>modernmart.noreply@gmail.com</a>
                  <div className="social-profiles mt-3">
                    <a href="/" className='text-white'><BsFacebook className='fs-2 me-3'/></a>
                    <a href="/" className='text-white'><AiFillTwitterCircle className='fs-1 me-3'/></a>
                    <a href="" className='text-white'><BsLinkedin className='fs-2 me-3'/></a>
                    <a href="/" className='text-white'><FaGithub className='fs-2 me-3'/></a>
                    <a href="/" className='text-white'><FaYoutube className='fs-1 me-3'/></a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <h4>Information</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                  <Link className='text-white py-2 mb-1'>Return Policy</Link>
                  <Link className='text-white py-2 mb-1'>Shopping Policy</Link>
                  <Link className='text-white py-2 mb-1'>Terms & Services</Link>
                  <Link className='text-white py-2 mb-1'>Blogs</Link>
                </div>
              </div>
              <div className="col-3">
                <h4>Account</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className='text-white py-2 mb-1'>Search</Link>
                  <Link className='text-white py-2 mb-1'>About Us</Link>
                  <Link className='text-white py-2 mb-1'>Faq</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                  <Link className='text-white py-2 mb-1'>Size Chart</Link>
                </div>
              </div>
              <div className="col-2">
                <h4>Quick Links</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablets</Link>
                  <Link className='text-white py-2 mb-1'>Watches</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className='py-4'>
          <div className='py-2'>
            <div className="container-xxl">
              <div className="row d-flex justify-content-between">
                <div className="col-3">
                  <p className='mb-0'>&copy; {new Date().getFullYear()}; Powered By Modern Mart</p>
                </div>
                <div className="col-4">

                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
      )
}

      export default Footer;