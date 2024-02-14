import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import headphonec from "../images/headphonec.jpeg"
import { Link } from 'react-router-dom';
const MRP = 98.67;

const Cart = () => {
    return (
        <>
            <MetaTags title="My Cart | Modern Mart" />
            <BreadCrums page="Cart" />
            <section className="cart-wrapper home-wrapper-2 py-3">
                <div className="container-xxl bg-white py-3">
                    <div className="row">
                        <div className="cart-container d-flex p-3 gap-20">
                            <div className="all-products-cart">
                                <h2>Shopping Cart</h2>
                                <p><span>No items in cart. <a href='javascript:void(0)'>Continue Shopping</a></span><a href='javascript:void(0)'>Select all Items</a></p>
                                <div className='product-card-cart'>
                                    <div className='w-100 text-end border-bottom'>Price</div>
                                    <div className='border-bottom'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex'>
                                                <div className='d-flex align-items-center px-2'><input type="checkbox" name="" id="" /></div>
                                                <div className='d-flex align-items-center px-2'><img src={headphonec} alt=""/></div>
                                                <div className='d-flex flex-column justify-content-between py-4'>
                                                    <div>
                                                        <p className='mb-1'>{"Product-name-will-come-here"}</p>
                                                        <p className='text-success mb-1'>{"In Stock"}</p>
                                                        <p><span className='fw-bold'>Color :</span>  {"Black"}</p>
                                                    </div>
                                                    <div className='subtotal-card-cart control-button-cart control-card-cart'>
                                                        <div>
                                                            <span>Qty: <input type="number" min={1} defaultValue={1} max={20} className='ps-3' /></span>
                                                        </div>
                                                        <div>
                                                            <a href="javascript:void(0)">REMOVE</a>
                                                        </div>
                                                        <div>
                                                            <a href="javascript:void(0)">SHARE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='py-4 d-flex align-items-start gap-1'>$<span className='fs-5 subtotal-card-cart'>{`${98.67}`}</span></p>
                                            </div>
                                        </div>
                                        <div className='subtotal-card-cart control-button-cart control-outside-card-cart pb-3'>
                                                <div>
                                                    <span>Qty: <input type="number" min={1} defaultValue={1} max={20} className='ps-3' /></span>
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0)">REMOVE</a>
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0)">SHARE</a>
                                                </div>
                                            </div>
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <p className='py-4 d-flex align-items-center gap-1'>SubTotal {1} item/s $ <span className='fs-5 subtotal-card-cart'>{`${98.67}`}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='price-total-cart px-3'>
                                <div className='d-flex flex-column justify-content-center  border-bottom py-3'>
                                    <Link className='button-inverse text-center'> Check out</Link>
                                </div>
                                <div className='d-flex flex-column justify-content-center  border-bottom'>
                                    <div className="py-2 d-flex justify-content-between">
                                        <div>Total Max. Retail Price</div>
                                        <div>{"$98.67"}</div>
                                    </div>
                                    <div className="py-2 d-flex justify-content-between">
                                        <div>Total Discount</div>
                                        <div>{"$10.99"}</div>
                                    </div>
                                    <div className="py-2 d-flex justify-content-between">
                                        <div>Delivery Charges</div>
                                        <div>{MRP > 100 ? <span className='text-success'>Free</span> : "$2.00"}</div>
                                    </div>
                                </div>
                                <div className="subtotal-card-cart d-flex justify-content-between align-items-center border-bottom py-2"><span>{`Subtotal (${1} item/s)`}</span> <span>$&nbsp;{`${98.67}`}</span></div>
                                <div className='py-2'>
                                    <p className='mb-0 text-success text-center'>You will save total ${10.00} on order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;