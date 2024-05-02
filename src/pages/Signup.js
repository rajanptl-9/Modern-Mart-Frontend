import { React, useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { Link, useNavigate } from 'react-router-dom';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetState } from '../features/user/userSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const schema = yup.object().shape({
        firstname: yup.string().required("Enter Your First Name!"),
        lastname: yup.string().required("Enter Your Last Name!"),
        mobile: yup.string().required("Enter Your Mobile No!").matches(/^[1-9]\d{1,10}$/, 'Invalid Mobile Number!'),
        email: yup.string().email().required("Enter Your Email!"),
        password: yup.string().required("Create New Password!").min(8, 'Password must be at least 8 characters!').max(20, "Password must be at most 20 characters!"),
        confirmPassword: yup.string("Confirm New Password!").required().oneOf([yup.ref('password'), null], 'Passwords must match!')
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(registerUser(values));
        }
    });
    
    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
    const handlePasswordEye = () => {
        setSeePassword(!seePassword);
    }
    const handleConfirmPasswordEye = () => {
        setSeeConfirmPassword(!seeConfirmPassword);
    }

    
    const authState = useSelector(state => state.user);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        if (!user) {
            dispatch(resetState());
        }else {
            setTimeout(() => {
                navigate(-1);
            }, 1000);
        }
        //eslint-disable-next-line
    }, [user]);

    useEffect(() => {
        if (authState.isSuccess && !authState.isError) {
            toast.success('✓ Registration Success!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                onClick: () => {
                    dispatch(resetState());
                    navigate(-1);
                }
            });
            setTimeout(() => {
                navigate(-1);
            }, 1000);
        } else if (authState.isError && !authState.isSuccess) {
            toast.error('✗ Registration Failed!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                onClick: () => {
                    dispatch(resetState());
                    navigate("/login");
                }
            });
            dispatch(resetState());
        }
        //eslint-disable-next-line
    }, [authState.isError, authState.isSuccess, authState.isLoading]);

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
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div className='position-relative'><input type="text" name="firstname" id="fname" className='w-100 my-3 form-control' placeholder='First Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.firstname}</div>
                                        ) : null}</div>
                                    <div className='position-relative'><input type="text" name="lastname" id="lname" className='w-100 my-3 form-control' placeholder='Last Name' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.lastname}</div>
                                        ) : null}</div>
                                    <div className='position-relative'><input type="tel" name="mobile" id="mobile" className='w-100 my-3 form-control' placeholder='Phone No.' value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {formik.touched.mobile && formik.errors.mobile ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.mobile}</div>
                                        ) : null}</div>
                                    <div className='position-relative'><input type="email" name="email" id="email" className='w-100 my-3 form-control' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} required />{formik.touched.email && formik.errors.email ? (
                                        <div className='auth-error'>&nbsp;&nbsp;{formik.errors.email}</div>
                                    ) : null}</div>
                                    <div className='position-relative'><input type={seePassword ? "text" : "password"} name="password" id="password" className='w-100 mb-3 form-control' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {seePassword ? <span className='password-eye-auth'><VscEye onClick={handlePasswordEye} /></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handlePasswordEye} /></span>}
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.password}</div>
                                        ) : null}</div>
                                    <div className='position-relative mb-3'><input type={seeConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" className='w-100 mb-2 form-control' placeholder='Confirm-Password' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                                        {seeConfirmPassword ? <span className='password-eye-auth'><VscEye onClick={handleConfirmPasswordEye} /></span> : <span className='password-eye-auth'><VscEyeClosed onClick={handleConfirmPasswordEye} /></span>}
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                            <div className='auth-error'>&nbsp;&nbsp;{formik.errors.confirmPassword}</div>
                                        ) : null}</div>

                                    <div className="d-flex justify-content-center gap-20 mb-3">
                                        <button className="button" type='submit'>Sign Up</button>
                                    </div>
                                    <p className="text-center">Already have account? <Link to={'/login'}>Login.</Link></p>
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

export default Signup;