import React, { useEffect } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import RM_LS_User from '../utils/RM_LS_User';
import { getMyOrders } from '../features/order/orderSlice';
import OrderProduct from '../components/OrderProduct';

const Orders = () => {
    const dispatch = useDispatch();
    const myOrdersState = useSelector(state => state.order.myOrders);
    const { message } = useSelector(state => state.order);

    useEffect(() => {
        dispatch(getMyOrders());
        // eslint-disable-next-line
    }, [dispatch]);

    useEffect(() => {
        RM_LS_User(message);                
        // eslint-disable-next-line
    }, [message]);

    return (
        <>
            <MetaTags title="Orders | Modern Mart" />
            <BreadCrums page="My Orders" />
            <section className='wishlist-wrapper pt-3 pb-5'>
                <div className=" container-xxl ">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {myOrdersState &&
                                <div className="col-7 my-wishlist d-flex flex-column gap-8">
                                    <h4 className='mb-0'>My Orders - {myOrdersState ? myOrdersState.length : 0} Order/s</h4>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        {myOrdersState.map((order, index) => (
                                            <OrderProduct key={index} order={order} index={index} />
                                        ))}
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Orders