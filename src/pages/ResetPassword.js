import {React, useState} from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { VscEye,VscEyeClosed } from "react-icons/vsc";

const ResetPassword = () => {
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
            <MetaTags title="Reset Password | Modern Mart" />
            <BreadCrums page="Reset-password" />
            <section className="auth-wrapper py-5">
                <div className="container-xxl py-5">
                    <div className="rowpy-5">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="auth-card d-flex flex-column py-4 px-5 gap-10">
                                <h2 className='text-center'>Reset Password</h2>
                                <form action="">
                                    <div className='position-relative'><input type={seePassword ? "text" : "password"} name="new-password" id="" className='w-100 mb-3 form-control' placeholder='Type new password' required />
                                    {seePassword? <span className='password-eye-auth'><VscEye onClick={handlePasswordEye}/></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handlePasswordEye}/></span>}</div>
                                    <div className='position-relative'><input type={seeConfirmPassword ? "text" : "password"} name="confirm-new-password" id="" className='w-100 mb-4 form-control' placeholder='Re-type new password' required />
                                    {seeConfirmPassword? <span className='password-eye-auth'><VscEye onClick={handleConfirmPasswordEye}/></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handleConfirmPasswordEye}/></span>}</div>
                                    <div className="d-flex justify-content-center gap-20">
                                        <button type='submit' className="button">Submit</button>
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

export default ResetPassword