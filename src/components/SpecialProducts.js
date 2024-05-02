import { React } from 'react';
import { Link } from 'react-router-dom';
import default_image from '../images/default_prodcut.jpeg'
import StarRatings from 'react-star-ratings';

const SpecialProducts = (props) => {
    const { data } = props;

    return (
        <Link to={`/our-store/${data._id}`} className='text-dark'>
            <div className="special-card d-flex py-2 px-2 position-relative gap-2" >
                <div className="special-image-container">
                    {data.images.length > 0 ? (data.images.map((image, index) => <img src={`${image.url}`} key={image + index} alt="product" className='special-image img-fluid' />)) : <img src={default_image} alt="product" className='product-image img-fluid' />}

                </div>
                <div className="d-flex justify-content-start align-items-start">
                    <div className='product-desc d-flex flex-column justify-content-center align-items-start'>
                        <div className='fw-bold text-start'>
                            <p className='m-0'>{data.description.length > 90 ? data.description.slice(0, 90) + "..." : data.description}</p>
                        </div>
                        <div className="company-name my-1 fw-bold">{data.brand.title}</div>
                        <div className='star-rating my-0 d-flex align-items-center gap-8'>
                            <StarRatings
                                rating={parseInt(data.totalRating)}
                                starRatedColor="orange"
                                // changeRating={}
                                numberOfStars={5}
                                name='product-rating'
                                starDimension="22px"
                                starSpacing="-5px"
                            />
                            <p className='mb-1 text-warning'>{parseInt(data.totalRating).toFixed(1)} / 5.0</p>
                            <p className='mb-1'>*(Total {data.sold} sold)</p>
                        </div>
                        <div className='product-price'><p className='my-1 fs-4 me-3'>₹ {data.price}</p></div>
                        <div className="shop-buttons-product">
                            <button type="button" className="button btn-block mb-1">Add to Cart</button>
                        </div>
                        {<div className='d-flex justify-content-start align-items-center py-1'>
                            {data.tags.map((tag, index) => <div key={tag + index} className='tag bg-warning me-1 px-1 rounded-3'>#{tag}</div>)}
                        </div>}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SpecialProducts