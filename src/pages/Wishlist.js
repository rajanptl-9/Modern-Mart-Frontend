import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import watch from '../images/watch.png';
import { ImBin2 } from "react-icons/im";

const Wishlist = () => {
    return (
        <>
            <MetaTags title="Wishlist | Modern Mart" />
            <BreadCrums page="Wishlist" />
            <section className='wishlist-wrapper pt-3 pb-5'>
                <div className=" container-xxl ">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-7 my-wishlist">
                                <h4 className='mb-3 py-2'>My Wishlist - {2} Product</h4>
                                <div className="product-container-wishlist d-flex col-12 justify-content-start position-relative mb-2">
                                    <span className="remove-product-wishlist"><ImBin2 /></span>
                                    <img src={watch} alt="product-image" height={116} />
                                    <div className='product-details-wishlist d-flex py-3 px-4 flex-column'>
                                        <h6 className='mb-1'>NoiseFit Halo Smartwatch with 1.43" Vintage Black</h6>
                                        <h5 className='mb-2'>NoiseFit</h5>
                                        <p className='mb-2'>In Stock</p>
                                        <h4>$149.99</h4>
                                    </div>
                                </div>
                                <div className="product-container-wishlist d-flex col-12 justify-content-start position-relative">
                                    <span className="remove-product-wishlist"><ImBin2 /></span>
                                    <img src={watch} alt="product-image" height={116} />
                                    <div className='product-details-wishlist d-flex py-3 px-4 flex-column'>
                                        <h6 className='mb-1'>NoiseFit Halo Smartwatch with 1.43" Vintage Black</h6>
                                        <h5 className='mb-2'>NoiseFit</h5>
                                        <p className='mb-2'>In Stock</p>
                                        <h4>$149.99</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist;