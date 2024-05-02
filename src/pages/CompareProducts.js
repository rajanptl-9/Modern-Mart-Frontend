import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import laptop from '../images/laptop.jpg'
import { IoClose } from "react-icons/io5";

const CompareProducts = () => {
    
    return (
        <>
            <MetaTags title="Comapre | Modern Mart" />
            <BreadCrums page="Compare Products" />
            <div className="compare-wrapper container-xxl py-3">
                <div className="row">
                    <div className="col-12 d-flex gap-20">
                        <div className="compare-product-column d-flex flex-column position-relative border">
                            <span className='close-icon-compare'><IoClose /></span>
                            <img src={laptop} alt="close" />
                            <h6 className='px-3 py-2'>Apple MacBook Air 2020 (M1, 13.3 Inch, 8GB, 256GB, macOS Big Sur, Space Grey)</h6>
                            <h6 className='px-3 py-2'>$999.99</h6>
                            <div className="d-flex flex-column p-3 gap-20">
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Brand</h5>
                                    <p className="mb-0">Apple</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Type</h5>
                                    <p className="mb-0">Laptop</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Availability</h5>
                                    <p className="mb-0 compare-product-availability">In stock</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Color</h5>
                                    <div className='color-option-compare d-flex justify-content-evenly gap-8'>
                                        <div style={{ backgroundColor: "gray" }}></div>
                                        <div style={{ backgroundColor: "blue" }}></div>
                                        <div style={{ backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Size</h5>
                                    <p className="mb-0">14' 16'</p>
                                </div>
                            </div>
                        </div>
                        <div className="compare-product-column d-flex flex-column position-relative border">
                            <span className='close-icon-compare'><IoClose /></span>
                            <img src={laptop} alt="product" />
                            <h6 className='px-3 py-2'>Apple MacBook Air 2020 (M1, 13.3 Inch, 8GB, 256GB, macOS Big Sur, Space Grey)</h6>
                            <h6 className='px-3 py-2'>$999.99</h6>
                            <div className="d-flex flex-column p-3 gap-20">
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Brand</h5>
                                    <p className="mb-0">Apple</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Type</h5>
                                    <p className="mb-0">Laptop</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Availability</h5>
                                    <p className="mb-0 compare-product-availability">In stock</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Color</h5>
                                    <div className='color-option-compare d-flex justify-content-evenly gap-8'>
                                        <div style={{ backgroundColor: "gray" }}></div>
                                        <div style={{ backgroundColor: "blue" }}></div>
                                        <div style={{ backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Size</h5>
                                    <p className="mb-0">14' 16'</p>
                                </div>
                            </div>
                        </div>
                        <div className="compare-product-column d-flex flex-column position-relative border">
                            <span className='close-icon-compare'><IoClose /></span>
                            <img src={laptop} alt="product" />
                            <h6 className='px-3 py-2'>Apple MacBook Air 2020 (M1, 13.3 Inch, 8GB, 256GB, macOS Big Sur, Space Grey)</h6>
                            <h6 className='px-3 py-2'>$999.99</h6>
                            <div className="d-flex flex-column p-3 gap-20">
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Brand</h5>
                                    <p className="mb-0">Apple</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Type</h5>
                                    <p className="mb-0">Laptop</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Availability</h5>
                                    <p className="mb-0 compare-product-availability">In stock</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Color</h5>
                                    <div className='color-option-compare d-flex justify-content-evenly gap-8'>
                                        <div style={{ backgroundColor: "gray" }}></div>
                                        <div style={{ backgroundColor: "blue" }}></div>
                                        <div style={{ backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Size</h5>
                                    <p className="mb-0">14' 16'</p>
                                </div>
                            </div>
                        </div>
                        <div className="compare-product-column d-flex flex-column position-relative border">
                            <span className='close-icon-compare'><IoClose /></span>
                            <img src={laptop} alt="product" />
                            <h6 className='px-3 py-2'>Apple MacBook Air 2020 (M1, 13.3 Inch, 8GB, 256GB, macOS Big Sur, Space Grey)</h6>
                            <h6 className='px-3 py-2'>$999.99</h6>
                            <div className="d-flex flex-column p-3 gap-20">
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Brand</h5>
                                    <p className="mb-0">Apple</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Type</h5>
                                    <p className="mb-0">Laptop</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Availability</h5>
                                    <p className="mb-0 compare-product-availability">In stock</p>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Color</h5>
                                    <div className='color-option-compare d-flex justify-content-evenly gap-8'>
                                        <div style={{ backgroundColor: "gray" }}></div>
                                        <div style={{ backgroundColor: "blue" }}></div>
                                        <div style={{ backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                                <div className="specs-compare d-flex justify-content-between py-2">
                                    <h5 className='mb-0 font-lighter'>Size</h5>
                                    <p className="mb-0">14' 16'</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProducts