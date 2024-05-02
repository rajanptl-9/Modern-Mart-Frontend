import { React, useEffect, useState } from 'react';
import { BsHeart } from "react-icons/bs";
import StarRatings from 'react-star-ratings';
import { IoEyeOutline } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { BsHeartHalf } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import default_image from '../images/default_prodcut.jpeg'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/wishlist/wishlistSlice';

const ProductCard = (props) => {
    const { grid, data } = props;
    const dispatch = useDispatch();
    //eslint-disable-next-line
    const [liked, setLiked] = useState(data.like);
    const wishlist = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [];

    const handleLike = () => {
        const body = { prodId: data._id };
        dispatch(addToWishlist(body));
    }

    const isInWishlist = (productId) => {
        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i]._id === productId) {
                return true;
            }
        }
        return false;
    };    

    useEffect(() => {
        isInWishlist(data._id) ? setLiked(2) : setLiked(0);
        //eslint-disable-next-line
    }, [wishlist]);

    return <>
        <div className="product-card d-flex flex-column p-3 position-relative" >
            <div className="favourite d-flex justify-content-end" onClick={handleLike}>
                {liked === 0 ? <BsHeart className='fs-5' /> : liked === 1 ? <BsHeartHalf className='fs-5' /> : <BsHeartFill className='fs-5 text-danger' />}
            </div>
            <a href={"/our-store/"+data._id} className='text-dark'>
                <div className={`${grid === 1 ? "d-flex justify-content-start align-items-start" : ""}`}>
                    <div className={`${grid === 1 ? "product-image-container col-3" : "product-image-container"}`}>
                        {data.images.length > 0 ? (data.images.map((image, index) => <img src={`${image.url}`} key={image + index} alt="product" className='product-image img-fluid' />)) : <img src={default_image} alt="product" className='img-fluid' />}
                    </div>
                    <div className='product-desc d-flex flex-column justify-content-center align-items-start p-1'>
                        <div className="company-name mt-1 fw-bold">{data.brand.title}</div>
                        <div className='product-name fw-bold text-start mb-0'>
                            <p className='mb-0'>{data.title}</p>
                        </div>
                        <div className='product-name fw-bold text-start text-secondary'>
                            <p className='mb-2'>{data.brand.title}</p>
                        </div>
                        <div className={`${grid !== 4 && grid ? 'text-left d-block description' : "d-none"}`}>
                            {data.description}
                        </div>
                        <div className='star-rating'>
                            <StarRatings
                                rating={parseInt(data.totalRating)}
                                starRatedColor="orange"
                                // changeRating={}
                                numberOfStars={5}
                                name='product-rating'
                                starDimension="22px"
                                starSpacing="-5px"
                            />
                        </div>
                        <div className='product-price'><p>₹ {data.price}</p></div>
                    </div>
                </div>
            </a>
            <div className="action-menu position-absolute">
                <span><Link><TbArrowsShuffle2 className='action-menu-icon' /></Link></span>
                <span><a href={"/our-store/"+data._id}><IoEyeOutline className='action-menu-icon' /></a></span>
                <span><Link><GiShoppingBag className='action-menu-icon' /></Link></span>
            </div>
        </div>
    </>
};

export default ProductCard;