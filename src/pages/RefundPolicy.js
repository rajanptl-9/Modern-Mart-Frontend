import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const RefundPolicy = () => {
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
                                        <h1>Refund Policy</h1>
                                        <p class="lead">Effective Date: [1 Jan, 2024]</p>
                                    </header>

                                    <section>
                                        <h2>Introduction</h2>
                                        <p>Thank you for shopping with us. If you are not entirely satisfied with your purchase, we're here to help. This Refund Policy outlines the terms and conditions for refunds and returns.</p>
                                    </section>

                                    <section>
                                        <h2>Returns</h2>
                                        <p>You have [Insert Number] days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging and you need to have the receipt or proof of purchase.</p>
                                    </section>

                                    <section>
                                        <h2>Refunds</h2>
                                        <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
                                    </section>

                                    <section>
                                        <h2>Shipping</h2>
                                        <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                                    </section>

                                    <section>
                                        <h2>Contact Us</h2>
                                        <p>If you have any questions on how to return your item to us, contact us:</p>
                                        <ul>
                                            <li>Email: modernmart.noreply@gmail.com</li>
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

export default RefundPolicy