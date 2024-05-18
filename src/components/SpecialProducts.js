import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import default_image from '../images/default_prodcut.jpeg'
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const SpecialProducts = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const {cartlist, isError, isSuccess} = useSelector(state => state.cart);

    const [selectedColor, setSelectedColor] = useState(data.selcolor);
    const [quantity, setQuantity] = useState(data.selQunt);
    const [isAdded, setIsAdded] = useState(data.isAdded);

    const handleChangeQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
    }
    const addItemToCart = async () => {
        const prodData = {
            productId: data._id,
            quantity: quantity,
            color: selectedColor,
            price: data.price,
        }
        dispatch(addToCart(prodData));
    }

    useEffect(() => {        
        if (cartlist && cart.length > 0) {                     
            for(let i=0; i<cart.length; i++){
                if(cart[i]?.productId?._id === data._id){
                    setIsAdded(true);
                    setQuantity(cart[i].quantity);
                    setSelectedColor(cart[i].color);
                }
            }
        }
        //eslint-disable-next-line
    }, [cartlist,isSuccess,isError])

    return (
        <>
            <div className='text-dark'>
                <div className="special-card d-flex py-2 px-2 position-relative gap-2" >
                    <div className="special-image-container">
                        {data?.images?.length > 0 ? (data?.images?.map((image, index) => <img src={`${image?.url}`} key={image + index} alt="product" className='special-image img-fluid' />)) : <img src={default_image} alt="product" className='product-image img-fluid' />}
                    </div>
                    <div className="special-card-desciption d-flex justify-content-start align-items-start">
                        <div className='product-desc d-flex flex-column justify-content-center align-items-start'>
                            <div className='fw-bold text-start'>
                                <p className='m-0'>{data?.description?.length > 90 ? data?.description.slice(0, 90) + "..." : data?.description}</p>
                            </div>
                            <div className="company-name mb-0 fw-bold">{data?.brand?.title}</div>
                            <div className='star-rating my-0 d-flex align-items-center gap-8'>
                                <StarRatings
                                    rating={parseInt(data?.totalRating)}
                                    starRatedColor="orange"
                                    // changeRating={}
                                    numberOfStars={5}
                                    name='product-rating'
                                    starDimension="22px"
                                    starSpacing="-5px"
                                />
                                <p className='mb-1 text-warning'>{parseInt(data?.totalRating).toFixed(1)} / 5.0</p>
                                <p className='mb-1'>*(Total {data?.sold} sold)</p>
                            </div>
                            <div className='product-price'><p className='my-1 fs-5 me-3'>₹ {data?.price}</p></div>
                            {data?.color && <div className='color-pallete d-flex justify-content-between align-items-center flex-wrap mb-2'>
                                {data?.color.map((color, index) => {
                                    return <div key={index} id={color?._id} className='color-circle' style={{ backgroundColor: color?.title, border: color?.title === 'White' ? "1px solid black" : `1px solid ${color.title}`, boxShadow: selectedColor === color._id ? `0px 0px 0 5px #febd69` : "none" }} onClick={(e) => setSelectedColor(e.target.id)} ></div>
                                })
                                }
                            </div>}
                            {isAdded &&
                                <>
                                    <div className='mb-2'>Quantity: &nbsp; &nbsp; {isAdded && quantity}
                                    </div>
                                    <div className="shop-buttons-product">
                                        <Link to={"/cart"} className="button btn-block" >Go to Cart</Link>
                                    </div>
                                </>
                            }
                            {!isAdded &&
                                <>
                                    <div className='mb-3'>Quantity: &nbsp; &nbsp; <input type="number" name="quantity" id="quantity" className='w-6 ps-2' min={1} max={data.quantity} value={quantity} onChange={e => handleChangeQuantity(e)} /></div>
                                    <div className="shop-buttons-product">
                                        <button className="button btn-block" onClick={addItemToCart}>Add to Cart</button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialProducts