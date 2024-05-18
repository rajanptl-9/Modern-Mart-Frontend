import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const ShoppingPolicy = () => {
    return (
        <>
            <MetaTags title="Shopping Policy | Modern Mart" />
            <BreadCrums page="Shopping Policy" />
            <section className="policy-wrapper">
                <div className="container-xxl py-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy bg-white p-3">
                                <div class="container">
                                    <header class="text-center">
                                        <h1>Shopping Policy</h1>
                                        <p class="lead">Effective Date: [1 Jan, 2024]</p>
                                    </header>

                                    <section>
                                        <h2>Introduction</h2>
                                        <p>Welcome to our Shopping Policy page! Here you will find important information about our shopping terms and conditions. We strive to provide a smooth and enjoyable shopping experience for our customers.</p>
                                    </section>

                                    <section>
                                        <h2>Order Placement</h2>
                                        <p>When you place an order on our website, you are making an offer to purchase the selected products under these terms and conditions. All orders are subject to availability and confirmation of the order price.</p>
                                    </section>

                                    <section>
                                        <h2>Pricing and Availability</h2>
                                        <p>We make every effort to ensure that the pricing and availability information on our website is accurate. However, there may be instances where errors occur. If we discover an error in the price of any goods you have ordered, we will inform you as soon as possible and give you the option to reconfirm your order at the correct price or cancel it. If we are unable to contact you, we will treat the order as canceled.</p>
                                    </section>

                                    <section>
                                        <h2>Payment</h2>
                                        <p>We accept various forms of payment, including credit/debit cards, PayPal, and other payment methods as specified on our website. Payment will be debited and cleared from your account before the dispatch of your goods. If the issuer of your payment card refuses to authorize payment, we will not be liable for any delay or non-delivery.</p>
                                    </section>

                                    <section>
                                        <h2>Shipping and Delivery</h2>
                                        <p>We aim to deliver your order within the estimated delivery time provided at checkout. However, delivery times are estimates and not guarantees. We will not be liable for any delay in delivery caused by circumstances beyond our control. Shipping costs are calculated based on the destination and weight of the order.</p>
                                    </section>

                                    <section>
                                        <h2>Returns and Exchanges</h2>
                                        <p>If you are not satisfied with your purchase, you may return or exchange the items in accordance with our Return Policy. Please refer to our Return Policy page for detailed information on how to process returns and exchanges.</p>
                                    </section>

                                    <section>
                                        <h2>Customer Support</h2>
                                        <p>If you have any questions or concerns about your order, please contact our customer support team:</p>
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
            </section>
        </>
    )
}

export default ShoppingPolicy