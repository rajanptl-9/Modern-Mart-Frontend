import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../features/cart/cartSlice';
import { Typeahead } from 'react-bootstrap-typeahead';
import { toastSuccess } from '../utils/toastify';
import { getCategories } from '../features/category/categorySlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector(state => state.cart.cartlist);
  const productState = useSelector(state => state?.product?.products);
  const categories = useSelector(state => state.category.categories);
  const [productOption, setProductOption] = useState([]);
  //eslint-disable-next-line
  const [paginate, setPaginate] = useState(null);
  const [citems, setcitems] = useState(0);
  const [ctotal, setctotal] = useState(0);
  const [userName, setUserName] = useState(null);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.clear();
    toastSuccess('Logged Out Successfully!')
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  useEffect(()=>{
    if(productState){
      let options = [];
      for(let i=0; i<productState.length; i++){
        options.push({id:indexedDB, prod:productState[i]?._id, name:productState[i]?.title});
      }
      setProductOption(options);
    }
  },[productState]);

  useEffect(() => {
    if (user) {
      setUserName(`${user.firstname} ${user.lastname}`);
    } else {
      setUserName(null);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getCategories());
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
      <header className="header-top-stripe">
        <div className="container-xxl d-flex justify-content-center p-0">
          <div className="row" style={{fontSize: "13px"}}>
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
        <div className="container-xxl d-flex justify-content-center">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-2 p-0">
              <h2 className='mb-0 fs-4'><Link className='text-white' to={'/'}>Modern Mart</Link></h2>
            </div>
            <div className="col-5">
              <form className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log('Results paginated')}
                  onChange={selected => {navigate(`/our-store/${selected[0].prod}`); console.log(selected);
                  }}
                  options={productOption}
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search for product here..."
                  style={{width:"400px", minWidth:"200px"}}
                />
                <button type='submit' className="input-group-text p-2" id="basic-addon2"><ImSearch className='fs-5' /></button>
              </form>
            </div>
            <div className="col-5 d-flex justify-content-end pe-0" style={{ fontSize: "14px"}}>
              <div className="menu-container header-upper-links d-flex align-items-center justify-space-between gap-20">
                {/* <div><Link className='text-white d-flex align-items-center' to={'/compare-products'}>
                  <ImLoop2 className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8 mb-0  menu-text'>Compare <br />
                    Products</span>
                </Link>
                </div> */}
                <div ><Link className='text-white d-flex align-items-center' to={'/wishlist'}>
                  <FiHeart className='mb-0 fs-1 py-1 menu-icon' />
                  <span className='margin-left-8 mb-0 menu-text'>Favourite <br />
                    Wishlist</span>
                </Link></div>
                <div ><Link className='text-white d-flex align-items-center' to={userName ? "/my-profile" : '/login'}>
                  <FaRegCircleUser className='mb-0 fs-1 py-1 menu-icon' />
                  {userName ? <span className='margin-left-8  mb-0 menu-text text-white'>{userName} <br />
                    My Account</span> : <span className='margin-left-8  mb-0 menu-text'> Log In<br />
                    Account</span>}
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
                <div className="dropdown me-4"  style={{fontSize: "16px"}}>
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 py-1 d-flex align-items-center gap-1 justify-content-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <TbCategory2 className='fs-4' />
                    Shopping Categories
                  </button>
                  {categories && <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {categories.map((category,index) => <li key={index}><Link to={'/our-store?cat='+category._id} className="dropdown-item">{category.title}</Link></li>)}
                  </ul>}
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20" style={{fontSize: "16px"}}>
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