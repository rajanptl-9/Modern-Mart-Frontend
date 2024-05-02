import { React, useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import ProductCard from '../components/ProductCard';
import StarRatings from 'react-star-ratings';
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ReactImageZoom from 'react-image-zoom';
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProducts } from '../features/product/productSlice';
import { addToCart, getCart } from '../features/cart/cartSlice';
import { addToWishlist } from '../features/wishlist/wishlistSlice';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetState } from '../features/wishlist/wishlistSlice';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const getProductId = window.location.pathname.split("/")[2];
    const productState = useSelector(state => state.product.singleProduct);
    const sellPrice = productState ? productState.price - productState.price * 0.28 : 0.0;
    const wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
    const { message, isSuccess, isError } = useSelector(state => state.wishlist);    
    const cartState = useSelector(state => state.cart);

    const [listImages, setListImages] = useState([]);
    const [showWriteReview, setShowWriteReview] = useState(false);
    const [rating, setRating] = useState(0);
    const [viewImage, setViewImage] = useState("https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.jpg");
    const [imgWidth, setImgWidth] = useState(500);
    const props = { width: imgWidth, aspectRatio: "1", zoomWidth: 586, img: viewImage, offset: { vertical: 75, horizontal: 40 } };
    const [liked, setLiked] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const handleWriteReview = () => {
        setShowWriteReview(!showWriteReview);
    }
    const changeRating = (newRating) => {
        setRating(newRating);
    };
    const handleViewImage = (link) => {
        setViewImage(link);
    }
    const isInWishlist = (productId) => {
        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i]._id === productId) {
                return true;
            }
        }
        return false;
    };
    const handleLike = () => {
        const body = { prodId: productState._id };
        dispatch(addToWishlist(body));
    }
    const handleResize = () => {
        if (window.innerWidth >= 1220) {
            setImgWidth(500);
        } else if (window.innerWidth >= 768) {
            setImgWidth(700);
        } else {
            setImgWidth(`${window.innerWidth - 40}`);
        }
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                toast.info("✓ Product Link Copied!" + message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch((error) => {
                toast.info('✗ Failed to Copy! Please try again.!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                alert('Failed to copy product link. Please try again.');
            });
    };
    const handleChangeQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
    }
    const  addItemToCart = async()=>{
        const prodData = {
            productId: productState._id,
            quantity,
            color: selectedColor,
            price: productState.price,
        }
        dispatch(addToCart(prodData));
    }

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getOneProduct(getProductId));
        dispatch(getCart())
        // eslint-disable-next-line
    }, [dispatch, getProductId]);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, [])
    useEffect(() => {
        if (productState) isInWishlist(productState._id) ? setLiked(2) : setLiked(0);
        //eslint-disable-next-line
    }, [wishlist]);
    useEffect(() => { 
        if (productState) {
            setViewImage(productState.images && productState.images.length > 0 ? productState.images[0].url : "https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.jpg");
            let imgList = [];
            for (let i = 0; i < productState.images.length; i++) {
                imgList.push(productState.images[i]);
            }
            setListImages(imgList);
            setSelectedColor(productState.color[0]._id);
            
        }        
    }, [productState]);    

    const allProduct = useSelector(state => state.product.products);
    const popularProducts = [];
    if (allProduct) {
        for (let i = 0; i < allProduct.length && popularProducts.length < 5; i++) {
            if (allProduct[i].tags && allProduct[i].tags.includes('popular')) {
                popularProducts.push({
                    _id: allProduct[i]._id,
                    title: allProduct[i].title.length > 40 ? allProduct[i].title.slice(0, 40) + "..." : allProduct[i].title,
                    price: allProduct[i].price,
                    totalRating: allProduct[i].totalRating,
                    images: allProduct[i].images,
                    brand: allProduct[i].brand.title,
                    description: allProduct[i].description,
                    category: allProduct[i].category.title,
                    like: isInWishlist(allProduct[i]._id) ? 2 : 0,
                });
            }
        }
    }

    useEffect(() => {
        if (message && isSuccess && !isError && (message === "Product Removed From Wishlist!" || message === "Product Added To Wishlist!")) {
            toast.info("✓ " + message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            dispatch(resetState());
        } else if (message && !isSuccess && isError) {
            toast.info('✗ Failed to add in Wishlist!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        // eslint-disable-next-line
    }, [message]);  
    
    useEffect(() => {
        if (cartState && cartState.cartlist) {
            for (let i = 0; i < cartState.cartlist.length; i++) {
                if (cartState.cartlist[i].productId._id === getProductId) {
                    setQuantity(cartState.cartlist[i].quantity);
                    setIsAdded(true);
                }
            }
        }
        //eslint-disable-next-line
    },[cartState]);

    useEffect(() => {
        if(cartState.message === "Added to cart successfully!"){
            if (cartState.isSuccess && !cartState.isError) {
                toast.success("✓ Added to cart Successfully!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                dispatch(getCart());
            } else if (!cartState.isSuccess && cartState.isError) {
                toast.error('✗ Failed to add in cart!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        }
        // eslint-disable-next-line
    }, [cartState.cart]); 
    
    return (
        <>
            <MetaTags title="Product Name | Modern Mart" />
            <BreadCrums page="Product Name" />
            {productState ? <section className="single-product-wrapper home-wrapper-2 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-details-product d-flex justify-content-between align-items-start bg-white py-4 px-3 rounded-3 gap-10">
                                <div className="images-product d-flex align-items-center gap-20">
                                    {listImages.length > 0 && <div className='sub-image-viewer'>
                                        <div className="image-gallery-viewer">
                                            {listImages.length > 0 ? listImages.map((image, index) => <div onClick={() => handleViewImage(image.url)} key={image.public_id}><img src={image.url} alt={image.public_id}></img></div>
                                            ) : <div onClick={() => handleViewImage("https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.jpg")}><img src="https://t3.ftcdn.net/jpg/05/52/37/18/360_F_552371867_LkVmqMEChRhMMHDQ2drOS8cwhAWehgVc.jpg" alt={productState.public_id}></img></div>}
                                        </div>
                                    </div>}
                                    <div id='imageViewer' className="main-image-viewer mb-4 d-flex flex-column align-items-center">
                                        <div className='d-flex w-100 justify-content-end gap-10 pe-4 fs-6 pt-1 align-items-center'>
                                            <div className='image-icon-product'><TbArrowsShuffle2 className='fs-5' /><span>Compare</span></div>
                                            <div className='image-icon-product' onClick={handleLike}>
                                                {liked === 2 ? <BsHeartFill className='fs-6 text-danger' /> : <BsHeart className='fs-6' />}
                                                <span>Wishlist</span>
                                            </div>
                                        </div>
                                        {/* <img src={viewImage} alt="image" /> */}
                                        <div><ReactImageZoom {...props} className="zoomed-image-product" /></div>
                                    </div>
                                </div>
                                <div className="description-product d-flex flex-column align-items-start pe-4">
                                    <h5 className='mb-2 fw-normal'>{productState.title} </h5>
                                    <div className='d-flex align-items-center mb-2'>
                                        <div className='product-rating-product'>
                                            <StarRatings
                                                rating={parseInt(productState.totalRating)}
                                                starRatedColor="orange"
                                                numberOfStars={5}
                                                name='product-rating'
                                                starDimension="20px"
                                                starSpacing="-5px"
                                            />
                                        </div>
                                        <span className='d-flex align-items-center'>
                                            <div className='ms-2'><span className="badge bg-secondary"> {parseInt(productState.totalRating).toFixed(1)} / 5.0</span></div>
                                        </span>
                                    </div>
                                    <p className="fw-normal text-success mb-2">Extra ₹{(productState.price - sellPrice).toFixed(2)} off</p>
                                    <div className='d-flex gap-10 align-items-end mb-2'>
                                        <span className='fs-2 mb-0 p-0'>₹{sellPrice}</span>
                                        <span className='fs-4 mb-0 p-0 py-1'>₹<s>{productState.price}</s></span>
                                        <span className='fs-4 mb-0 p-0 mb-1 text-success'>28% off</span>
                                    </div>
                                    <p className='fw-normal'>{productState.quantity > 0 ? <><MdEventAvailable className='fs-5' /><span className='text-success'>{" In Stock"}</span></> : <span className='text-danger'>Currently not Available.</span>}</p>
                                    {productState.color && <div className='color-pallete d-flex justify-content-between align-items-center flex-wrap mb-3'>
                                        <h5 className='mb-0 fw-normal'>Color</h5>
                                        {productState.color.map((color, index) => {
                                            return <div key={index} id={color._id} className='color-circle' style={{ backgroundColor: color.title, border: color.title === 'White' ? "1px solid black" : `1px solid ${color.title}` , boxShadow: selectedColor === color._id ? `0px 0px 0 5px #febd69` : "none"}} onClick={(e) => setSelectedColor(e.target.id)} ></div>
                                        })
                                        }
                                    </div>}
                                    <div className='d-flex flex-column align-items-start gap-8 mb-3'>
                                        <div className='mb-3'>Quantity &nbsp; &nbsp; {isAdded ? quantity : <input type="number" name="quantity" id="" className='w-6 ps-2' min={1} max={productState.quantity} value={quantity} onChange={handleChangeQuantity}/>}</div>
                                        <div className="shop-buttons-product d-flex gap-20 mb-3">
                                            {isAdded && <Link to={"/cart"} className="button btn-block" >Go to Cart</Link>}
                                            {!isAdded && <button className="button btn-block" onClick={addItemToCart}>Add to Cart</button>}
                                            <Link type="button" to="/checkout" className="button-inverse btn-block">Buy Now</Link>
                                        </div>
                                        <table className='mb-3'>
                                            <tbody>
                                                <tr>
                                                    <th><p className='fw-normal'>Brand</p></th>
                                                    <td><p className='fw-light'>{productState.brand.title}</p></td>
                                                </tr>
                                                <tr>
                                                    <th><p className='fw-normal'>Name</p></th>
                                                    <td><p className='fw-light'>{productState.title}</p></td>
                                                </tr>
                                                <tr>
                                                    <th><p className='fw-normal'>Category</p></th>
                                                    <td><p className='fw-light'>{productState.category.title}</p></td>
                                                </tr>
                                                <tr>
                                                    <th><p className='fw-normal me-3'>Description</p></th>
                                                    <td><p className='fw-light'>{productState.description}</p></td>
                                                </tr>
                                                {productState.tags && <tr>
                                                    <th><p className='fw-normal'>Tags</p></th>
                                                    <td><div className='d-flex gap-8 fw-light align-items-start'>
                                                        {productState.tags.map((tag, index) => {
                                                            return <span key={tag + index} className='tags-product'>#{tag}</span>
                                                        })
                                                        }
                                                    </div>
                                                    </td>
                                                </tr>}
                                            </tbody>
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
                                                                        zIndex="8"
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
                                    </div>
                                    <div className="other-details-product py-2">
                                        <h6 className="mb-1">Payments </h6>
                                        <p className='mb-3'><RiSecurePaymentFill className='fs-4 me-1' />We have the support of Razorpay for the safe and secure payments.</p>
                                        <h6 className="mb-1">Shipping & Returns </h6>
                                        <p className='mb-3'><FaShippingFast className='fs-4 me-1' />Free Shipping on Products over ₹100 and Returns Available for products.<br />
                                            We ship all the products across selected pincode within 1-2 weeks!</p>
                                        <span className='d-flex align-items-center' onClick={copyToClipboard}><h6 className='mb-0'>Product Link Copy: </h6> &nbsp; &nbsp;<button className='border-0 bg-white'><FaLink className='fs-5 me-1' />Click Here to Copy Product Link </button> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> : <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}
            {popularProducts.length > 0 && <section className="single-popular-product-wrapper home-wrapper-2 py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='mb-3'>Our Popular Products</h3>
                            <div className='product-card-list'>
                                <div className="product-card-container d-flex justify-content-between">
                                    {popularProducts.map((product) => <ProductCard key={product._id} grid={4} data={product} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {/* <section className="popular-product-wrapper home-wrapper-2 py-3">
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
            </section> */}
            <ToastContainer />
        </>
    )
}

export default SingleProduct