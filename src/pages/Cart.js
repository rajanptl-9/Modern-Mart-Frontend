import React, { useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../features/cart/cartSlice';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItems from '../components/CartItems';
import RM_LS_User from '../utils/RM_LS_User';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart.cartlist);
    const [subTotal, setSubTotal] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const {updatedProduct, message, isError, isSuccess} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {
        if (cartState) {
            let total = 0;
            //eslint-disable-next-line
            const values = cartState.map((item, index) => {
                total += item.price * item.quantity;
            });
            setSubTotal(parseFloat(total).toFixed(2));
            setFinalTotal(parseFloat(total - (total * 0.28) - (total > 100 ? 0 : 20)).toFixed(2));
            setTotalDiscount(parseFloat(total * 0.28 + (total > 100 ? 20 : 0)).toFixed(2));
        }
    }, [cartState]);

    useEffect(() => {
        if (message === 'Product removed successfully!' && isSuccess && !isError) {
            toast.success('✓ Product removed successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            dispatch(getCart());
        } else if (isError && !isSuccess) {
            toast.error('✗ Product remove Failed!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        //eslint-disable-next-line
    }, [isError, message]);

    useEffect(() => {        
        RM_LS_User(message);
        if (updatedProduct) { 
            if (message === 'Quantity updated successfully!' && isSuccess && !isError) {
                toast.success('✓ Quantity updated successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                dispatch(getCart());
            } else if (message !== "Authorized token expired! Please log in again." && message !== "Cannot read properties of undefined (reading 'rejectWithValue')"  && isError && !isSuccess) {
                toast.error('✗ Quantity update Failed!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        }
    //eslint-disable-next-line
    }, [updatedProduct, isSuccess, isError, message])

    return (
        <>
            <MetaTags title="My Cart | Modern Mart" />
            <BreadCrums page="Cart" />
            <ToastContainer />
            <section className="cart-wrapper home-wrapper-2 py-3">
                <div className="container-xxl bg-white py-3 rounded-3">
                    <div className="row">
                        <div className="cart-container d-flex p-3 gap-20">
                            {cartState && <>
                                <div className="all-products-cart">
                                    <h2>Shopping Cart</h2>                                    
                                    <div className='product-card-cart'>
                                        <div className='w-100 text-end border-bottom'>Price</div>
                                        {cartState && cartState.map((item, index) => (                                            
                                            <CartItems key={item._id} item={item} index={index}/>
                                        ))}

                                        <div className='d-flex justify-content-end'>
                                            <p className='py-4 d-flex align-items-center gap-1'>SubTotal ({cartState?.length} item/s) :  <span className='fs-5 subtotal-card-cart'>₹{subTotal}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='price-total-cart px-3'>
                                    <div className='d-flex flex-column justify-content-center  border-bottom py-3'>
                                        <Link to={"/checkout"} className='button-inverse text-center'> Check Out</Link>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center  border-bottom'>
                                        <div className="py-2 d-flex justify-content-between">
                                            <div>Total Max. Retail Price</div>
                                            <div>{subTotal}</div>
                                        </div>
                                        <div className="py-2 d-flex justify-content-between">
                                            <div>Total Discount</div>
                                            <div>{parseFloat(subTotal * 0.28).toFixed(2)}</div>
                                        </div>
                                        <div className="py-2 d-flex justify-content-between">
                                            <div>Delivery Charges</div>
                                            <div>{subTotal > 100 ? <span className='text-success'>Free</span> : "₹20.00"}</div>
                                        </div>
                                    </div>
                                    <div className="subtotal-card-cart d-flex justify-content-between align-items-center border-bottom py-2"><span>{`Subtotal (${cartState.length} item/s)`}</span> <span>₹&nbsp;{finalTotal}</span></div>
                                    <div className='py-2'>
                                        <p className='mb-0 text-success text-center'>You will save total ₹{totalDiscount} on order</p>
                                    </div>
                                </div></>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;