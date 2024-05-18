import React, { useEffect, useState } from 'react'
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { ToastContainer } from 'react-toastify';
import { FiEdit } from "react-icons/fi";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { RxCross2 } from "react-icons/rx";
import { toastError } from '../utils/toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const updateMessage = useSelector(state => state.user);
    const [isUpdate, setIsUpdate] = useState(false);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    if (!user) {
        window.location.href = '/login';
    }

    useEffect(() => {
        if(updateMessage.message === "Profile Updated!") {
            setIsUpdate(false);
            setTimeout(() => {
                window.location.reload();                
            }, 1000);
        };
    }, [updateMessage]);

    const schema = yup.object().shape({
        firstname: yup.string().required('First Name is required'),
        lastname: yup.string().required('Last Name is required'),
        // email: yup.string().email('Invalid Email').required('Email is required'),
        // mobile: yup.string().required('Mobile is required'),
        // address: yup.string().required('Address is required'),    
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email,
            mobile: user?.mobile,
            // address: user?.address
        },
        validationSchema: schema,
        onSubmit: values => {
            if(!formik.values.firstname){
                toastError('First Name is required');
                return;
            }else if(!formik.values.lastname){
                toastError('Last Name is required');
                return;
            }
            dispatch(updateProfile(values));
        }
    })


    return (
        <>
            <MetaTags title="My Profile | Modern Mart" />
            <BreadCrums page="My-Profile" />
            <ToastContainer />
            <section className="store-wrapper py-3">
                <div className="container-xxl">
                    <div className="row px-3 d-flex justify-content-center py-3">
                        <div className="col-7">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h4>My Profile</h4>
                                    {!isUpdate ?
                                        <button className='bg-white d-flex align-items-center border-0 fs-5 rounded-3' onClick={() => { setIsUpdate(true) }}><FiEdit className='me-1' /> Update</button> :
                                    <button className='bg-white d-flex align-items-center border-0  rounded-3 fs-5' onClick={() => { setIsUpdate(false) }}><RxCross2 className='me-1' /> Cancel</button>}
                                </div>
                                <div className="card-body">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                                    <input type="text" className="form-control" id="firstname" name='firstname' disabled={!isUpdate} value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" id="lastname" name='lastname' disabled={!isUpdate} value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" name='email' className="form-control" id="email" disabled value={formik.values.email} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                                    <input type="text" className="form-control" id="mobile" name='mobile' disabled value={formik.values.mobile} />
                                                </div>
                                            </div>
                                            {/* <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="address" className="form-label">Address</label>
                                                    <textarea className="form-control" id="address" rows="3" disabled={!isUpdate}></textarea>
                                                </div>
                                            </div> */}
                                            {isUpdate && <div className="col-12">
                                                <button type="submit" className="btn btn-primary">Update Profile</button>
                                            </div>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile