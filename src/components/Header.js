import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ImSearch, ImLoop2 } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../features/cart/cartSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header() {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart.cartlist);
  const [citems, setcitems] = useState(0);
  const [ctotal, setctotal] = useState(0);

  const [userName, setUserName] = useState(null);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.clear();
    toast('Logged Out Successfully!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    })
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  useEffect(() => {
    if (user) {
      setUserName(`${user.firstname} ${user.lastname}`);
    } else {
      setUserName(null);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user) dispatch(getCart());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (cartState) {
      setcitems(cartState.length);
      let total = 0;
      for (let i = 0; i < cartState.length; i++) {
        total += cartState[i].quantity * cartState[i].price * 0.72;
      }
      setctotal(parseInt(total));
    }
  }, [cartState]);

  return (
    <>
      <ToastContainer />
      <header className="header-top-stripe">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over ₹100 and Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline : <a className='text-white' href="tel:+91 8735999102">+91 873 599 9102</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className='mb-0'><Link className='text-white' to={'/'}>Modern Mart</Link></h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Search Products Here..." aria-label="Search Products Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2"><ImSearch className='fs-5' /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <div className="menu-container header-upper-links d-flex align-items-center justify-space-between gap-20">
                <div><Link className='text-white d-flex align-items-center' to={'/compare-products'}>
                  <ImLoop2 className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8 mb-0  menu-text'>Compare <br />
                    Products</span>
                </Link>
                </div>
                <div ><Link className='text-white d-flex align-items-center' to={'/wishlist'}>
                  <FiHeart className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8 mb-0 menu-text'>Favourite <br />
                    Wishlist</span>
                </Link></div>
                <div ><Link className='text-white d-flex align-items-center' to={'/login'}>
                  <FaRegCircleUser className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8  mb-0 menu-text'>{userName ? userName : "Log In"} <br />
                    My Account</span>
                </Link></div>
                <div ><Link className='text-white d-flex align-items-center' to={'/cart'}>
                  <MdOutlineShoppingCart className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='d-flex flex-column margin-left-8 mb-0 menu-text'><span className='badge bg-white' style={{ color: "black" }}>{citems}</span>
                    <span>₹{ctotal}</span></span>
                </Link></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-lower">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-start flex-wrap">
                <div className="dropdown me-4">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 py-1 d-flex align-items-center gap-2 justify-content-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <CgMenuGridO className='fs-1' />
                    Shopping Categories
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <NavLink to="/" className='text-white'>Home</NavLink>
                    <NavLink to="/our-store" className='text-white'>Our Store</NavLink>
                    <NavLink to="/my-orders" className='text-white'>My Orders</NavLink>
                    <NavLink to="/contact" className='text-white'>Contact</NavLink>
                    <button className='text-white bg-transperent border-0 transparent-background' onClick={() => handleLogout()}>LOG-OUT </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;