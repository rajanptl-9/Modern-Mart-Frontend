import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const ForgotPassword = () => {
    return (
        <>
            <MetaTags title="Forgot Password | Modern Mart" />
            <BreadCrums page="Forgot Password" />
            <section className="auth-wrapper py-5">
                <div className="container-xxl py-5">
                    <div className="rowpy-5">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="auth-card d-flex flex-column py-4 px-5 gap-10">
                                <h2 className='text-center'>Forgot Password</h2>
                                <p className="mb-2 text-center">We will send you an email to change the password</p>
                                <form action="">
                                    <div><input type="email" name="email" id="" className='w-100 mt-2 mb-4 form-control' placeholder='Email' required /></div>
                                    <div className="d-flex flex-column align-items-center gap-20">
                                        <button type='submit' className="button">Submit</button>
                                        <button type='reset' className="btn">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword;