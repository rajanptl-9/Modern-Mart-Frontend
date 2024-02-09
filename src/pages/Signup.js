import {React, useState} from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';
import { VscEye,VscEyeClosed } from "react-icons/vsc";

const Signup = () => {
    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
    const handlePasswordEye = () => {
        setSeePassword(!seePassword);
    }
    const handleConfirmPasswordEye = () => {
        setSeeConfirmPassword(!seeConfirmPassword);
    }
    return (
        <>
            <MetaTags title="Sign Up | Modern Mart" />
            <BreadCrums page="Sign Up" />
            <section className="auth-wrapper py-5">
                <div className="container-xxl py-2">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="auth-card d-flex flex-column py-4 px-5 gap-10">
                                <h2 className='text-center mb-0'>Create Account</h2>
                                <form action="">
                                    <div><input type="text" name="name" id="" className='w-100 my-3 form-control' placeholder='Name' required /></div>
                                    <div><input type="tel" name="phone" id="" className='w-100 my-3 form-control' placeholder='Phone No.' required /></div>
                                    <div><input type="email" name="email" id="" className='w-100 my-3 form-control' placeholder='Email' required /></div>
                                    <div className='position-relative'><input type={seePassword ? "text" : "password"} name="password" id="" className='w-100 mb-3 form-control' placeholder='Password' required />
                                    {seePassword? <span className='password-eye-auth'><VscEye onClick={handlePasswordEye}/></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handlePasswordEye}/></span>}</div>
                                    <div className='position-relative'><input type={seeConfirmPassword ? "text" : "password"} name="confirm-password" id="" className='w-100 mb-2 form-control' placeholder='Confirm-Password' required />
                                    {seeConfirmPassword? <span className='password-eye-auth'><VscEye onClick={handleConfirmPasswordEye}/></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handleConfirmPasswordEye}/></span>}</div>
                                    <p className="mb-4">Already have account? <Link to={'/login'}>Login.</Link></p>
                                    <div className="d-flex justify-content-center gap-20">
                                        <Link to={"/signup"} className='signup'><button className="button" type='submit'>Sign Up</button></Link>
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

export default Signup;