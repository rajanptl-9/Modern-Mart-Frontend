import React from 'react';
import { Outlet } from "react-router-dom";
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const CheckoutLayout = () => {
    return (
        <>
            <MetaTags title="Check Out | Modern Mart" />
            <BreadCrums page="Check Out" />
            <section className="checkout-wrapper home-wrapper-2 py-3">
                <div className="container-xxl bg-white rounded-3">
                    <div className="row">
                        <Outlet />
                    </div>
                </div>
            </section >
        </ >
    )
}

export default CheckoutLayout