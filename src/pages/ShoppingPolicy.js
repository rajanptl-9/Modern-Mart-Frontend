import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const ShoppingPolicy = () => {
    return (
        <>
            <MetaTags title="Shopping Policy | Modern Mart" />
            <BreadCrums page="Shopping Policy" />
            <section className="policy-wrapper">
                <div className="container-xxl py-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy bg-white p-3">
                                <h6>Policy</h6>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingPolicy