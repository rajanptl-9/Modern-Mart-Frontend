import { React, useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import ProductCard from '../components/ProductCard';
import StarRatings from 'react-star-ratings';
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { BsHeart, BsHeartFill, BsHeartHalf } from "react-icons/bs";
import ReactImageZoom from 'react-image-zoom';
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";

const MRP = 999.99;
const sellPrice = 799.99;
const offerPercentage = ((MRP - sellPrice) / MRP) * 100;
const SingleProduct = () => {
    const [showWriteReview, setShowWriteReview] = useState(false);
    const [rating, setRating] = useState(0);
    const [viewImage, setViewImage] = useState("https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill");
    const [imgWidth, setImgWidth] = useState("500");
    const props = { width: imgWidth, aspectRatio: "1", zoomWidth: 586, img: viewImage, offset: { vertical: 75, horizontal: 40 } };
    const [liked, setLiked] = useState(0);
    const handleWriteReview = () => {
        setShowWriteReview(!showWriteReview);
    }
    const changeRating = (newRating) => {
        setRating(newRating);
    };
    const handleViewImage = (link) => {
        setViewImage(link);
    }
    const addToCartHandler = () => {
        console.log("Added to Cart");
    }
    const handleLike = () => {
        if (liked === 0) {
            setLiked(1);
            setTimeout(() => {
                setLiked(2);
            }, 200);
        } else {
            setLiked(1);
            setTimeout(() => {
                setLiked(0);
            }, 200);
        }
    }
    const handleResize = () => {
        if (window.innerWidth >= 1220) {
            setImgWidth("500");
        } else if (window.innerWidth >= 768) {
            setImgWidth("700");
        } else {
            setImgWidth(`${window.innerWidth - 40}`);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, [])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                alert('Product link copied!');
            })
            .catch((error) => {
                console.error('Failed to copy product link:', error);
                alert('Failed to copy product link. Please try again.');
            });
    };
    return (
        <>
            <MetaTags title="Product Name | Modern Mart" />
            <BreadCrums page="Product Name" />
            <section className="single-product-wrapper home-wrapper-2 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-details-product d-flex justify-content-between align-items-start bg-white py-4 px-3 rounded-3 gap-10">
                                <div className="images-product d-flex align-items-center gap-20">
                                    <div className='sub-image-viewer'>
                                        <div className="image-gallery-viewer">
                                            <div onClick={() => handleViewImage("https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill")}><img src="https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill"></img></div>
                                            <div onClick={() => handleViewImage("https://www.edgars.co.za/media/catalog/product/g/a/galaxy_tab_a8_1.jpg")}><img src="https://www.edgars.co.za/media/catalog/product/g/a/galaxy_tab_a8_1.jpg"></img></div>
                                            <div onClick={() => handleViewImage("https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill")}><img src="https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill"></img></div>
                                            <div onClick={() => handleViewImage("https://www.edgars.co.za/media/catalog/product/g/a/galaxy_tab_a8_1.jpg")}><img src="https://www.edgars.co.za/media/catalog/product/g/a/galaxy_tab_a8_1.jpg"></img></div>
                                            <div onClick={() => handleViewImage("https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill")}><img src="https://media.cnn.com/api/v1/images/stellar/prod/samsung-galaxy-tab-s9-ultra-square-comparison-card-cnnu.jpg?c=1x1&q=h_1280,w_1280,c_fill"></img></div>
                                            <div onClick={() => handleViewImage("https://www.edgars.co.za/media/catalog/product/g/a/galaxy_tab_a8_1.jpg")}><img src="https://www.edgars.co.za/media/catalog/product/g/a/galaxy_tab_a8_1.jpg"></img></div>
                                        </div>
                                    </div>
                                    <div id='imageViewer' className="main-image-viewer mb-4 d-flex flex-column align-items-center">
                                        <div className='d-flex w-100 justify-content-end gap-10 pe-4 fs-6 pt-1 align-items-center'>
                                            <div className='image-icon-product'><TbArrowsShuffle2 className='fs-5' /><span>Compare</span></div>
                                            <div className='image-icon-product' onClick={handleLike}>
                                                {liked === 0 ? <BsHeart className='fs-6' /> : liked === 1 ? <BsHeartHalf className='fs-6' /> : <BsHeartFill className='fs-6' />}
                                                <span>Wishlist</span>
                                            </div>
                                        </div>
                                        {/* <img src={viewImage} alt="image" /> */}
                                        <div><ReactImageZoom {...props} className="zoomed-image-product"/></div>
                                    </div>
                                </div>
                                <div className="description-product d-flex flex-column align-items-start pe-4">
                                    <h5 className='mb-2 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum suscipit eius, doloremque quas ullam perferendis corrupti vero veritatis nemo. </h5>
                                    <div className='d-flex align-items-center mb-2'>
                                        <div className='product-rating-product'>
                                            <StarRatings
                                                rating={4.6}
                                                starRatedColor="orange"
                                                numberOfStars={5}
                                                name='product-rating'
                                                starDimension="20px"
                                                starSpacing="-5px"
                                            />
                                        </div>
                                        <span className='d-flex align-items-center'>
                                            <div className='ms-2'><span class="badge bg-secondary"> {4.6} / 5.0</span></div>
                                        </span>
                                    </div>
                                    <p className="fw-normal text-success mb-2">Extra ${MRP - sellPrice} off</p>
                                    <div className='d-flex gap-10 align-items-end mb-2'>
                                        <span className='fs-2 mb-0 p-0'>${sellPrice}</span>
                                        <span className='fs-4 mb-0 p-0 py-1'>$<s>{MRP}</s></span>
                                        <span className='fs-4 mb-0 p-0 mb-1 text-success'>{offerPercentage.toPrecision(2)}% off</span>
                                    </div>
                                    <p className='fw-normal'><MdEventAvailable className='fs-5'/><span className='text-success'>{" In Stock"}</span></p>
                                    <div className='color-pallete d-flex justify-content-between align-items-center flex-wrap mb-3'>
                                        <h5 className='mb-0 fw-normal'>Color</h5>
                                        <div style={{ backgroundColor: "black" }}></div>
                                        <div style={{ backgroundColor: "gray" }}></div>
                                        <div style={{ backgroundColor: "pink" }}></div>
                                    </div>
                                    <div className='d-flex flex-column align-items-start gap-8 mb-3'>
                                        <p className='mb-3'>Quantity &nbsp; &nbsp;<input type="number" name="quantity" id="" className='w-6 ps-2' min={1} max={20} defaultValue={1} /></p>
                                        <div class="shop-buttons-product d-flex gap-20 mb-3">
                                            <button type="button" class="button btn-block">Add to Cart</button>
                                            <button type="button" class="button-inverse btn-block">Buy Now</button>
                                        </div>
                                        <table className='mb-3'>
                                            <tr>
                                                <th><p className='fw-normal'>Brand</p></th>
                                                <td><p className='fw-light'>{"brand-name"}</p></td>
                                            </tr>
                                            <tr>
                                                <th><p className='fw-normal'>Name</p></th>
                                                <td><p className='fw-light'>{"product-name"}</p></td>
                                            </tr>
                                            <tr>
                                                <th><p className='fw-normal'>SKU</p></th>
                                                <td><p className='fw-light'>{"SKU01234"}</p></td>
                                            </tr>
                                            <tr>
                                                <th><p className='fw-normal me-3'>Description</p></th>
                                                <td><p className='fw-light'>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat doloribus, error inventore esse enim delectus animi tenetur. Quos debitis esse delectus reiciendis odio nulla saepe nemo minus laudantium harum?"}</p></td>
                                            </tr>
                                            <tr>
                                                <th><p className='fw-normal'>Tags</p></th>
                                                <td><p className='fw-light'><div className='d-flex gap-8'>
                                                    <span className='tags-product'>#{"Tablet"}</span>
                                                    <span className='tags-product'>#{"Black"}</span>
                                                    <span className='tags-product'>#{"Laptop"}</span>
                                                </div></p>
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="reviews d-flex flex-column bg-white pt-4 px-4 pb-2 rounded-3 mb-2">
                                            <div className="overall-user-review d-flex flex-column align-items-start justify-content-between pb-4 mb-3 border-bottom">
                                                <h6 className="mb-2">Customer Ratings & Reviews</h6>
                                                <div className="show-overall-review col-12 d-flex">
                                                    <div className='star-rating d-flex align-items-center'>
                                                        <StarRatings
                                                            rating={4.6}
                                                            starRatedColor="orange"
                                                            numberOfStars={5}
                                                            name='product-rating'
                                                            starDimension="18px"
                                                            starSpacing="-5px"
                                                        /> <p className='mb-0 mt-1'>&nbsp;&nbsp;Based on {2} Review/s.</p>
                                                    </div>
                                                    <div>
                                                        <button className="button write-review-button" onClick={handleWriteReview}>
                                                            <MdOutlineRateReview />  Write a review
                                                        </button>
                                                    </div>
                                                    <div className={`${showWriteReview ? "write-review-product" : "d-none"}`} >
                                                        <div className="review-container d-flex flex-column justify-content-start px-3 py-2 text-white">
                                                            <div className='text-end'><IoClose className='text-white fs-2 close-write-review' onClick={handleWriteReview} /></div>
                                                            <h4 className='text-center'>Write a Review</h4>
                                                            <form action="">
                                                                <div className="mb-3">
                                                                    <label htmlFor="user-name-review" className="form-label">Name</label>
                                                                    <input type="text" className="form-control" id="user-name-review" placeholder="Enter Your Name" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="user-email-review" className="form-label">E-mail</label>
                                                                    <input type="email" className="form-control" id="user-email-review" placeholder="Enter Your E-mail" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">Rate</label><br />
                                                                    <StarRatings
                                                                        rating={rating}
                                                                        starRatedColor="orange"
                                                                        changeRating={changeRating}
                                                                        numberOfStars={5}
                                                                        starDimension="30px"
                                                                        starSpacing="5px"
                                                                        zIndex= "8"
                                                                    />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="review-title-review" className="form-label">Review Title</label>
                                                                    <input type="text" className="form-control" id="review-title-review" placeholder="Give Your Review A Title" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="user-comments-review" className="form-label">Comments</label>
                                                                    <textarea className="form-control" id="user-comments-review" rows="6" placeholder='Leave Your Comments...'></textarea>
                                                                </div>
                                                                <div className="d-flex justify-content-center">
                                                                    <button type="submit" className="btn btn-light">Submit Review</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="user-review d-flex flex-column align-items-start justify-content-between border-bottom py-2 mb-3">
                                                <p className="mb-0"><i><b>{"user_name"}</b></i> on <i><b>{Date.now()}</b></i></p>
                                                <div className="col-12 d-flex justify-content-between">
                                                    <div className='star-rating d-flex align-items-center'>
                                                        <StarRatings
                                                            rating={4.6}
                                                            starRatedColor="orange"
                                                            // changeRating={}
                                                            numberOfStars={5}
                                                            name='product-rating'
                                                            starDimension="18px"
                                                            starSpacing="-5px"
                                                        /> <p className='mb-0 mt-1'>&nbsp;&nbsp;<b>- {"review_title"}</b></p>
                                                    </div>
                                                </div>
                                                <p className='fw-normal mt-2 mb-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, repellat vel iusto voluptates maxime totam reprehenderit et, laborum itaque atque blanditiis reiciendis. Cumque illum minima repellat accusantium, porro cupiditate natus!</p>
                                                <div className="response-review home-wrapper-2 p-3 mt-2">
                                                    <h6><b>{"Response-title"}</b> - {"user_name"}</h6>
                                                    <p className="mb-1">Thank you for the review! Hope this journey may continue!</p>
                                                </div>
                                                <div className="d-flex col-12 justify-content-end px-1">
                                                    <Link to="/" className='text-dark'><u>Report as inapproproate</u></Link>
                                                </div>
                                            </div>
                                            <div className="user-review d-flex flex-column align-items-start justify-content-between">
                                                <p className="mb-0"><i><b>{"user_name"}</b></i> on <i><b>{Date.now()}</b></i></p>
                                                <div className="col-12 d-flex justify-content-between">
                                                    <div className='star-rating d-flex align-items-center'>
                                                        <StarRatings
                                                            rating={4.6}
                                                            starRatedColor="orange"
                                                            // changeRating={}
                                                            numberOfStars={5}
                                                            name='product-rating'
                                                            starDimension="18px"
                                                            starSpacing="-5px"
                                                        /> <p className='mb-0 mt-1'>&nbsp;&nbsp;<b>- {"review_title"}</b></p>
                                                    </div>
                                                </div>
                                                <p className='fw-normal mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, repellat vel iusto voluptates maxime totam reprehenderit et, laborum itaque atque blanditiis reiciendis. Cumque illum minima repellat accusantium, porro cupiditate natus!</p>
                                                <div className="d-flex col-12 justify-content-end px-1">
                                                    <Link to="/" className='text-dark'><u>Report as inapproproate</u></Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <button onClick={addToCartHandler} className='btn btn-primary w-100 fs-6'>Add to Cart</button> */}
                                    </div>
                                    <div className="other-details-product py-2">
                                        <h6 className="mb-1">Payments </h6>
                                        <p className='mb-3'><RiSecurePaymentFill className='fs-4 me-1'/>We have the support of Razorpay for the safe and secure payments.</p>
                                        <h6 className="mb-1">Shipping & Returns </h6>
                                        <p className='mb-3'><FaShippingFast className='fs-4 me-1'/>Free Shipping on Products over $100 and Returns Available for products.<br />
                                            We ship all the products across selected pincode within 1-2 weeks!</p>
                                        <span className='d-flex' onClick={copyToClipboard}><h6>Product Link Copy: </h6> &nbsp; &nbsp;<p><a href="javascript:void(0)" className='text-dark text-decoration-underline'><FaLink className='fs-5 me-1'/>Click Here to Copy Product Link </a></p> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-product-wrapper home-wrapper-2 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='mb-3'>Our Popular Products</h3>
                            <div className='product-card-list'>
                                <div className="product-card-container d-flex justify-content-between">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-product-wrapper home-wrapper-2 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='mb-3'>Recently Viewed Products</h3>
                            <div className='product-card-list'>
                                <div className="product-card-container d-flex justify-content-between">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct