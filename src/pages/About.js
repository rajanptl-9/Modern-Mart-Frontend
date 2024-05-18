import React from 'react'
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const About = () => {
  return (
    <>
      <MetaTags title="Refund Policy | Modern Mart" />
      <BreadCrums page="Refund Policy" />
      <section className="policy-wrapper">
        <div className="container-xxl py-3">
          <div className="row">
            <div className="col-12">
              <div className="policy bg-white p-3">
                <div class="container">
                  <header class="text-center">
                    <h1>About Us</h1>
                    <p class="lead">Your one-stop destination for all your shopping needs</p>
                  </header>

                  <section>
                    <h2>Our Story</h2>
                    <p>At E-Commerce Company, we believe in providing customers with a convenient and seamless shopping experience. Our journey began with a simple idea: to create an online platform where people can find everything they need, from the latest fashion trends to home essentials and beyond.</p>
                    <p>Driven by our passion for innovation and customer satisfaction, we have grown into a trusted name in the e-commerce industry. We strive to offer a diverse range of products, competitive prices, and exceptional customer service to meet the needs of our valued customers.</p>
                  </section>

                  <section>
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower people to shop smart and live better. We are committed to providing a wide selection of high-quality products at affordable prices, delivered with speed and reliability. We aim to inspire confidence in our customers and exceed their expectations at every step of their shopping journey.</p>
                  </section>

                  <section>
                    <h2>Why Choose Us?</h2>
                    <ul>
                      <li>Extensive Product Range: Discover thousands of products across various categories, all in one place.</li>
                      <li>Competitive Prices: Enjoy great deals and discounts on your favorite brands and products.</li>
                      <li>Fast and Reliable Delivery: Get your orders delivered to your doorstep quickly and efficiently.</li>
                      <li>Exceptional Customer Service: Our dedicated support team is here to assist you with any inquiries or concerns.</li>
                      <li>Secure Shopping Experience: Shop with confidence knowing that your personal information is protected.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or feedback, please don't hesitate to reach out to us:</p>
                    <ul>
                      <li>Email: modernmart.noreply@gmail.com</li>
                      <li>Phone: (+91) 987-321-4560</li>
                      <li>Address: No.123, XYZ Mall, Gujarat-987654, India</li>
                    </ul>
                  </section>

                  <footer class="text-center">
                    <p>&copy; [2024] Modern Mart. All rights reserved.</p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section >
    </>
  )
}

export default About