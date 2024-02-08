import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { FaHome } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <MetaTags title="Contact | Modern Mart" />
      <BreadCrums page="Contact" />
      <div className="contact-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7438.367487877052!2d72.78320761398291!3d21.224561172686766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c16e8ab8475%3A0x8e795b2646cc9a0!2sMorabhagal%2C%20Surat%2C%20Gujarat%20395005!5e0!3m2!1sen!2sin!4v1707379902272!5m2!1sen!2sin"
                className='col-12 rounded-3'
                height={300} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-3">
              <div className="contact-inner-wrapper d-flex justify-content-between p-3">
                <div className='contact-form p-3'>
                  <h3 className="contact-title">Contact Us</h3>
                  <form action="" className='d-flex flex-column gap-20'>
                    <div><input type="text" className='form-control' placeholder='Name'/></div>
                    <div><input type="text" className='form-control' placeholder='Email *'/></div>
                    <div><input type="text" className='form-control' placeholder='Phone number'/></div>
                    <div><textarea type="text" className='form-control' placeholder='Comments' rows={6}/></div>
                    <div><button className='submit-button-contact btn' type="submit">Send Mail</button></div>
                  </form>
                </div>
                <div className='contact-details d-flex p-3 flex-column gap-10'>
                  <h3 className="contact-title">Get in Touch with Us</h3>
                  <div className='d-flex align-items-center'>
                    <FaHome/> 
                    <span className="mb-0">&nbsp; &nbsp;Project Store, No.123, XYZ Mall, Gujarat, 395005 India</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <IoCallSharp/> 
                    <span className="mb-0"><a href="tel:+919873214560" className='text-dark'>&nbsp; &nbsp;(+91) 987-321-4560</a></span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <HiMail/> 
                    <span className="mb-0">&nbsp; &nbsp;<a className='text-dark' href="mailto:modernmart.noreply@gmail.com">modernmart.noreply@gmail.com</a></span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <FaInfoCircle/> 
                    <span className="mb-0">&nbsp; &nbsp;Monday - Sunday (9AM - 11PM)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;