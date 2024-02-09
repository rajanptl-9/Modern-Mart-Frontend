import {React, useState} from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';
import { VscEye,VscEyeClosed } from "react-icons/vsc";


const Login = () => {
    const [seePassword, setSeePassword] = useState(false);
    const handlePasswordEye = () => {
        setSeePassword(!seePassword);
    }
    return (
        <>
            <MetaTags title="Log In | Modern Mart" />
            <BreadCrums page="Log In" />
            <section className="auth-wrapper py-5">
                <div className="container-xxl py-5">
                    <div className="rowpy-5">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="auth-card d-flex flex-column py-4 px-5 gap-10">
                                <h2 className='text-center mb-1'>Login</h2>
                                <form action="">
                                    <div><input type="email" name="email" id="" className='w-100 my-3 form-control' placeholder='Email' required /></div>
                                    <div className='position-relative'><input type={seePassword ? "text" : "password"} name="password" id="" className='w-100 mb-2 form-control' placeholder='Password' required />
                                    {seePassword? <span className='password-eye-auth'><VscEye onClick={handlePasswordEye}/></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handlePasswordEye}/></span>}</div>
                                    <p className="mb-4"><Link to="/forgot-password">Forgot-password?</Link></p>
                                    <div className="d-flex justify-content-center gap-20">
                                        <button type='submit' className="button">Log In</button>
                                        <Link to={"/signup"} className='signup'><button className="button">Sign Up</button></Link>
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

export default Login