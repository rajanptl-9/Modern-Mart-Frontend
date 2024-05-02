import React, { useEffect } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../features/wishlist/wishlistSlice';
import WishlistProduct from '../components/WishlistProduct';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RM_LS_User from '../utils/RM_LS_User';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistState = useSelector(state => state.wishlist.wishlist);
    const { message, isSuccess, isError } = useSelector(state => state.wishlist);

    useEffect(() => {
        dispatch(getUserWishlist());
        // eslint-disable-next-line
    }, [dispatch]);

    useEffect(() => {
        RM_LS_User(message);
        if (message && isSuccess && !isError && (message === "Product Removed From Wishlist!" || message === "Product Added To Wishlist!")) {
            toast.success(message, {
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
            dispatch(getUserWishlist());
        } else if (message !== "Authorized token expired! Please log in again." && message !== "Cannot read properties of undefined (reading 'rejectWithValue')" && !isSuccess && isError) {
            toast.error('Something went wrong!', {
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

    return (
        <>
            <MetaTags title="Wishlist | Modern Mart" />
            <BreadCrums page="Wishlist" />
            <section className='wishlist-wrapper pt-3 pb-5'>
                <div className=" container-xxl ">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {wishlistState &&
                                <div className="col-7 my-wishlist d-flex flex-column gap-8">
                                    <h4 className='mb-0'>My Wishlist - {wishlistState ? wishlistState.length : 0} Product</h4>
                                    {wishlistState.map((product, index) => (
                                        <WishlistProduct product={product} key={index} />
                                    ))}
                                </div>}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Wishlist;