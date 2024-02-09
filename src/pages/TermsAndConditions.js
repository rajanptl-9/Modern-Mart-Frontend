import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const TermsAndConditions = () => {
    return (
        <>
            <MetaTags title="Terms && Conditions | Modern Mart" />
            <BreadCrums page="Terms && Conditions" />
            <section className="policy-wrapper">
                <div className="container-xxl py-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy bg-white p-3">
                                <h6>Terms and Conditions</h6>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default TermsAndConditions;