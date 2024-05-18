import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCart, deleteProduct } from '../features/cart/cartSlice';
import { RiEdit2Fill } from "react-icons/ri";
import default_image from '../images/default_prodcut.jpeg'


const CartItems = (props) => {
    const dispatch = useDispatch();
    const cartState = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : null;
    const { item, index } = props;
    const [editQuantity, setEditQuantity] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);
    const { updatedProduct} = useSelector(state => state.cart);

    const copyToClipboard = (id) => {
        let base = window.location.href.split('/').slice(0, 3).join('/');
        navigator.clipboard.writeText(`${base}/our-store/${id}`)
            .then(() => {
                toast.info("✓ Product Link Copied!", {
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

    const handleRemoveItem = (id) => {
        dispatch(deleteProduct(id));
    }

    const updateQuantity = () => {
        const prodData = {
            productId: item.productId._id,
            quantity,
        }
        dispatch(updateCart(prodData));
    }   

    useEffect(() => {
        if(updatedProduct && updatedProduct.productId === item.productId._id){
            setQuantity(updatedProduct.quantity);
            if(editQuantity) setEditQuantity(false);
        }
        // eslint-disable-next-line
    },[updatedProduct]);
    
    return (
        <>
            <div key={index} className='border-bottom'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        {/* <div className='d-flex align-items-center px-2'><input type="checkbox" name="" id="" /></div> */}
                        {item?.productId?.images ? <div className='d-flex align-items-center px-2'><img src={item?.productId?.images[0]?.url} alt="" /></div> :
                        <img src={default_image} alt="product" className='img-fluid' />}
                        <div className='d-flex flex-column justify-content-between py-4'>
                            <div>
                                <Link to={window.location.href.split('/').slice(0, 3).join('/') + "/our-store/" + cartState[index]?.productId?._id} className='mb-1 product-name-cart'>{item?.productId?.title}</Link>
                                {item.quantity <= item.productId.quantity ?
                                    <p className='text-success mb-1 product-desc-cart'>{"In Stock"}</p> : <p className='text-danger mb-1 product-desc-cart'>{"Out of Stock"}</p>}
                                <div className='product-desc-cart d-flex gap-1'><span className='fw-bold '>Color :</span> <div className='color-pallete-item' style={{ backgroundColor: `${item?.color?.title}`, border: `${item?.color?.title === "White" ? "1px solid black" : ""}`, height: "20px", width: "20px", borderRadius: "50%" }}></div></div>
                            </div>
                            <div className='subtotal-card-cart control-button-cart control-card-cart fs-6'>
                                <div>
                                    {!editQuantity ?
                                        <span className='d-flex align-items-center gap-1'>Qty: {quantity} <RiEdit2Fill className='fs-5' style={{ cursor: "pointer" }} onClick={() => setEditQuantity(true)} /></span> :
                                        <> <input type="number" style={{ width: "60px", padding: "2px 4px" }} onChange={(e) => setQuantity(e.target.value)} value={quantity} /><button onClick={() => updateQuantity()}>Save</button></>}
                                </div>
                                <div>
                                    <button className='bg-white border-0 text-primary' id={item?.productId?._id} onClick={(e) => handleRemoveItem(e.target.id)} >REMOVE</button>
                                </div>
                                <div>
                                    <button id={item?.productId?._id} onClick={(e) => copyToClipboard(e.target.id)} className='bg-white border-0 text-primary'>SHARE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <p className='py-4 d-flex align-items-start gap-1'><span className='fs-5 subtotal-card-cart'>{`₹${item?.price}`}</span></p>
                    </div>
                </div>
                <div className='subtotal-card-cart control-button-cart control-outside-card-cart pb-3'>
                    <div>
                        <span>Qty: {item?.quantity}</span>
                    </div>
                    <div>
                        <button className='bg-white border-0 text-primary' id={item?.productId?._id} onClick={(e) => handleRemoveItem(e.target.id)} >REMOVE</button>
                    </div>
                    <div>
                        <button id={item?.productId?._id} onClick={(e) => copyToClipboard(e.target.id)} className='bg-white border-0 text-primary'>SHARE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems;