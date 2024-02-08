import { React, useState } from 'react';
import { BsHeart } from "react-icons/bs";
import ps5 from "../images/ps5.jpg"
import ps52 from "../images/ps52.jpg"
import StarRatings from 'react-star-ratings';
import { IoEyeOutline } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { BsHeartHalf } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const ProductCard = () => {
    const [liked, setLiked] = useState(0);
    const handleLike = () => {
        if (liked === 0) {
            setLiked(1);
            setTimeout(() => {
                setLiked(2);
            }, 200);
        }else{
            setLiked(1);
            setTimeout(() => {
                setLiked(0);
            }, 200);
        }

    }
    return <>
        <div className="product-card-landscape d-flex flex-colmn p-3 position-relative">
            <div className="favourite d-flex justify-content-end" onClick={handleLike}>
                {liked === 0 ? <BsHeart className='fs-5' /> : liked === 1 ? <BsHeartHalf className='fs-5' /> : <BsHeartFill className='fs-5' />}
            </div>
            <div className="product-image-container">
                <img src={ps5} alt="product" className='product-image img-fluid' />
                <img src={ps52} alt="product" className='product-image img-fluid' />
            </div>
            <div className='product-desc d-flex flex-column justify-content-center align-items-start p-1'>
                <company className="company-name mt-1 fw-bold">Sony</company>
                <div className='product-name fw-bold text-start'>
                    <p>PlayStation 5 Console Horizon Forbidden West</p>
                </div>
                <div className='star-rating'>
                    <StarRatings
                        rating={4.6}
                        starRatedColor="orange"
                        // changeRating={}
                        numberOfStars={5}
                        name='product-rating'
                        starDimension="22px"
                        starSpacing="-5px"
                    />
                </div>
                <div className='product-price'><p>$ 499.99</p></div>
            </div>
            <div className="action-menu position-absolute">
                <span><Link><TbArrowsShuffle2 className='action-menu-icon' /></Link></span>
                <span><Link><IoEyeOutline className='action-menu-icon' /></Link></span>
                <span><Link><GiShoppingBag className='action-menu-icon' /></Link></span>
            </div>
        </div>
    </>
};

export default ProductCard