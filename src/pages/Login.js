import { React, useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetState } from '../features/user/userSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required().min(8, 'Password must be at least 8 characters').max(20, "Password must be at most 20 characters"),
    });

    const authState = useSelector(state => state.user);
    const user = localStorage.getItem('user');

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(loginUser(values));
        }
    });
    const [seePassword, setSeePassword] = useState(false);
    const handlePasswordEye = () => {
        setSeePassword(!seePassword);
    }
    
    useEffect(() => {
        if (!user) {
            dispatch(resetState());
        }else {
            setTimeout(() => {                
                if(user) window.location.replace("/");
            }, 2000);
        }
        //eslint-disable-next-line
    }, [user]);   
    
    useEffect(() => {
        if (authState.isSuccess && !authState.isError) {
            toast.success('✓ Login Success!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                // onClick: () => {
                //     dispatch(resetState());
                //     if(user) navigate(-1);
                // }
            });
            // setTimeout(() => {
            //     if(user) navigate(-1);
            // }, 1000);
        } else if (authState.isError && !authState.isSuccess) {
            toast.error('✗ Login Failed!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                // onClick: () => {
                //     dispatch(resetState());
                //     navigate("/login");
                // }
            });
            // dispatch(resetState());
        }
        //eslint-disable-next-line
    }, [authState.isError, authState.isSuccess, authState.isLoading]);

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
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div className='mb-3 position-relative'><input type="email" name="email" id="" className='w-100 my-3 form-control' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.email}</div>
                                        ) : null}</div>
                                    <div className='position-relative mb-4'><input type={seePassword ? "text" : "password"} name="password" id="" className='w-100 mb-2 form-control' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {seePassword ? <span className='password-eye-auth'><VscEye onClick={handlePasswordEye} /></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handlePasswordEye} /></span>}
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.password}</div>
                                        ) : null}
                                    </div>
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
                <ToastContainer />
            </section>
        </>
    )
}

export default Login