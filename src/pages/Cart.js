import React, { useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../features/cart/cartSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItems from '../components/CartItems';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart.cartlist);
    const [subTotal, setSubTotal] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const {updatedProduct,deleteProduct, message, isError, isSuccess} = useSelector(state => state.cart);

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
        if (updatedProduct || deleteProduct) { 
            if (isSuccess && !isError) {
                
                dispatch(getCart());
            }
        }
    //eslint-disable-next-line
    }, [updatedProduct,deleteProduct, isSuccess, isError, message])

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
                                        <Link to={cartState?.length  === 0 ? "": "/checkout"} className='button-inverse text-center' > {cartState?.length  === 0 ? "Add Products to Cart" :  'Check Out'}</Link>
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
                                            {cartState?.length  === 0 ? <div>0.00</div> : <div>{subTotal > 100 ? <span className='text-success'>Free</span> : "₹20.00"}</div>}
                                        </div>
                                    </div>
                                    <div className="subtotal-card-cart d-flex justify-content-between align-items-center border-bottom py-2"><span>{`Subtotal (${cartState.length} item/s)`}</span> <span>₹&nbsp;{cartState?.length  === 0 ? '0.00':finalTotal}</span></div>
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