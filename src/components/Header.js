import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ImSearch, ImLoop2 } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";


function Header() {
  return (
    <>
      <header className="header-top-stripe py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 and Free Returns
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
      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className='mb-0'><Link className='text-white' to={'/'}>Modern Mart</Link></h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input type="text" className="form-control py-1" placeholder="Search Products Here..." aria-label="Search Products Here..." aria-describedby="basic-addon2" />
                <span class="input-group-text p-2" id="basic-addon2"><ImSearch className='fs-5' /></span>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <div className="menu-container header-upper-links d-flex align-items-center justify-space-between gap-20">
                <div><Link className='text-white d-flex align-items-center' to={'/'}>
                  <ImLoop2 className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8 mb-0  menu-text'>Compare <br />
                    Products</span>
                </Link>
                </div>
                <div ><Link className='text-white d-flex align-items-center' to={'/'}>
                  <FiHeart className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8 mb-0 menu-text'>Favourite <br />
                    Wishlist</span>
                </Link></div>
                <div ><Link className='text-white d-flex align-items-center' to={'/'}>
                  <FaRegCircleUser className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8  mb-0 menu-text'>Log In <br />
                    My Account</span>
                </Link></div>
                <div ><Link className='text-white d-flex align-items-center' to={'/'}>
                  <MdOutlineShoppingCart className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='d-flex flex-column margin-left-8 mb-0 menu-text'><span className='badge bg-white' style={{ color: "black" }}>0</span>
                    <span>$5000</span></span>
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
                <div class="dropdown me-4">
                  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 py-2 d-flex align-items-center gap-2 justify-content-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <CgMenuGridO className='fs-1'/>
                    Shopping Categories
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link class="dropdown-item" to="/">Action</Link></li>
                    <li><Link class="dropdown-item" to="/">Another action</Link></li>
                    <li><Link class="dropdown-item" to="/">Something else here</Link></li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <NavLink to="/" className='text-white'>Home</NavLink>
                    <NavLink to="/" className='text-white'>Our Store</NavLink>
                    <NavLink to="/contact" className='text-white'>Contact</NavLink>
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