import { React, useEffect, useState } from 'react'
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import ps5 from '../images/ps5.jpg';
import StarRatings from 'react-star-ratings';
import { RxDragHandleVertical } from "react-icons/rx";
import ProductCard from '../components/ProductCard';
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import { getColors } from '../features/color/colorSlice';
import { ToastContainer,toast,Bounce } from 'react-toastify';
import { resetState } from '../features/wishlist/wishlistSlice';

const OurStore = () => {
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product.products);
  const colorState = useSelector(state => state.color.colors);  
  const wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
  const wishlistState = useSelector(state => state.wishlist);
  
  const { message, isSuccess, isError } = useSelector(state => state.wishlist);

  const isInWishlist = (productId) => {
      for(let i=0; i<wishlist.length; i++){
          if(wishlist[i]._id === productId){
              return true;
          }
      }
      return false;
  };
  
  const listProduct = [];
  if(productState){    
    for(let i=0; i<productState.length; i++){
      listProduct.push({
        _id: productState[i]._id,
        title:  productState[i].title.length > 50 ? productState[i].title.slice(0, 50) + "..." : productState[i].title,
        price: productState[i].price,
        totalRating: productState[i].totalRating,
        images: productState[i].images,
        brand: productState[i].brand.title,
        description: productState[i].description,
        category: productState[i].category.title,
        like: isInWishlist(productState[i]._id) ? 2 : 0,
      });
    }
  }
  
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getColors());
  } ,[dispatch, wishlistState.wishlist]);

  useEffect(() => {
    if (message && isSuccess && !isError && (message === "Product Removed From Wishlist!" || message === "Product Added To Wishlist!")) {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        dispatch(resetState());
    } else if (message && !isSuccess && isError) {
        toast.error('Failed to add in Wishlist!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }
    // eslint-disable-next-line
}, [message]);

  const [grid, setGrid] = useState(4);
  // eslint-disable-next-line
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <MetaTags title="Our Store | Modern Mart" />
      <BreadCrums page="Our-Store" />
      <ToastContainer />
      <section className="store-wrapper py-3">
        <div className="container-xxl">
          <div className="row px-2">
            <div className="col-3">
              <div className="filter-card">
                <h5>Shop By Categories</h5>
                <div>
                  <ul className='ps-0 mb-1'>
                    <li><label>
                      <input
                        type="radio"
                        name="category"
                        checked={true}
                        value="all"
                        onChange={handleOptionChange}
                      />
                      &nbsp; All
                    </label></li>
                    <li><label>
                      <input
                        type="radio"
                        name="category"
                        value="tv"
                        onChange={handleOptionChange}
                      />
                      &nbsp; TV
                    </label></li>
                    <li><label>
                      <input
                        type="radio"
                        name="category"
                        value="laptop"
                        onChange={handleOptionChange}
                      />
                      &nbsp; Laptop
                    </label></li>
                    <li><label>
                      <input
                        type="radio"
                        name="category"
                        value="headphone"
                        onChange={handleOptionChange}
                      />
                      &nbsp; Headphones
                    </label></li>
                    <li><label>
                      <input
                        type="radio"
                        name="category"
                        value="tablet"
                        onChange={handleOptionChange}
                      />
                      &nbsp; Tablets
                    </label></li>
                    <li><label>
                      <input
                        type="radio"
                        name="category"
                        value="watch"
                        onChange={handleOptionChange}
                      />
                      &nbsp; Watches
                    </label></li>
                  </ul>
                </div>
              </div>
              <div className="filter-card">
                <h5>Filter By</h5>
                <div className='ms-2 mt-3'>
                  <h6>Availability</h6>
                  <div>
                    <ul className='ps-0'>
                      <li><label>
                        <input
                          type="checkbox"
                          name='available'
                          onChange={handleCheckboxChange}
                        />
                        &nbsp;Availble ({2})
                      </label></li>
                      <li><label>
                        <input
                          type="checkbox"
                          name='available'
                          onChange={handleCheckboxChange}
                        />
                        &nbsp;Out of stock ({0})
                      </label></li>
                    </ul>
                  </div>
                </div>
                <div className='ms-2 mt-3'>
                  <h6>Price</h6>
                  <div className='d-flex justify-content-between align-items-center '>
                    <div className="input-group mb-3">
                      <span className="input-group-text">₹</span>
                      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='from' />
                    </div>
                    <div><p className='mx-3'></p></div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">₹</span>
                      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='to' />
                    </div>
                  </div>
                </div>
                {colorState && <div className="ms-2 mt-2">
                  <h6>Color</h6>
                  <div className='color-pallete d-flex justify-content-between align-items-center flex-wrap'>
                    {colorState.map((color, index) => <div key={index} className='color-pallete-item' style={{ backgroundColor: color.title, border: `₹{color.title=== "White" ? "1px solid black" : ""}`}} onClick={(e) => console.log(e.target.style.backgroundColor)}></div>)}
                  </div>
                </div>}
                <div className='ms-2 mt-4'>
                  <h6>Size</h6>
                  <div>
                    <ul className='ps-0'>
                      <li><label>
                        <input
                          type="checkbox"
                          name='size'
                          onChange={handleCheckboxChange}
                        />
                        &nbsp;S ({2})
                      </label></li>
                      <li><label>
                        <input
                          type="checkbox"
                          name='size'
                          onChange={handleCheckboxChange}
                        />
                        &nbsp;M ({0})
                      </label></li>
                      <li><label>
                        <input
                          type="checkbox"
                          name='size'
                          onChange={handleCheckboxChange}
                        />
                        &nbsp;L ({0})
                      </label></li>
                      <li><label>
                        <input
                          type="checkbox"
                          name='size' onChange={handleCheckboxChange}
                        />
                        &nbsp;XL ({0})
                      </label></li>
                      <li><label>
                        <input
                          type="checkbox"
                          name='size'
                          onChange={handleCheckboxChange}
                        />
                        &nbsp;XXL ({0})
                      </label></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="filter-card product-tag-filter">
                <h5 className='mb-0'>Product Tags</h5>
                <div className='d-flex justify-content-start gap-8 flex-wrap'>
                  <h2 className='my-0 py-0'><button className="tags-product">#Headphones</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Tablet</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Gaming</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Music</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Apple</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Samsung</button></h2>
                </div>
              </div>
              <div className="filter-card">
                <h5>Recently Viewed</h5>
                <div className='d-flex flex-column gap-10 pb-2'>
                  <div className='recent-product d-flex align-items-center'>
                    <img src={ps5} alt="" height={100} width={100} />
                    <div>
                      <div className='product-desc d-flex flex-column justify-content-center align-items-start p-1'>
                        <div className='product-name fw-bold text-start pt-1'>
                          PlayStation 5 Console Horizon Forbidden West
                        </div>
                        <div className='pt-1'>
                          <StarRatings
                            rating={4.6}
                            starRatedColor="orange"
                            // changeRating={}
                            numberOfStars={5}
                            name='product-rating'
                            starDimension="18px"
                            starSpacing="-5px"
                          />
                        </div>
                        <div className='pt-2'><h6>₹499.99</h6></div>
                      </div>
                    </div>
                  </div>
                  <div className='recent-product d-flex align-items-center'>
                    <img src={ps5} alt="" height={100} width={100} />
                    <div>
                      <div className='product-desc d-flex flex-column justify-content-center align-items-start p-1'>
                        <div className='product-name fw-bold text-start pt-1'>
                          PlayStation 5 Console Horizon Forbidden West
                        </div>
                        <div className='pt-1'>
                          <StarRatings
                            rating={4.6}
                            starRatedColor="orange"
                            // changeRating={}
                            numberOfStars={5}
                            name='product-rating'
                            starDimension="18px"
                            starSpacing="-5px"
                          />
                        </div>
                        <div className='pt-2'><h6>₹499.99</h6></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 d-flex flex-column align-items-start">
              <div className="col-12 d-flex justify-content-between px-4 py-1 border border-gray rounded-3 bg-white">
                <div className='d-flex d-inline align-items-center gap-10'>
                  <span className='d-inline'>Sort By:</span>
                  <span><select name="" id="" className="form-select form-control border border-#7e9ec9 fs-6">
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Name A-Z</option>
                    <option value="title-descending">Name Z-A</option>
                    <option value="price-descending">Price-High to Low</option>
                    <option value="price-ascending">Price-Low to High</option>
                  </select></span>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-10">
                  <div>{productState? productState.length : 0} Products</div>
                  <div className="alignments d-flex gap-8">
                    <button className={`${grid===4 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={()=> {setGrid(4);}}><RxDragHandleVertical className='fs-3' /></button>
                    <button className={`${grid===2 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={()=> setGrid(2)}><LiaGripLinesVerticalSolid className='fs-4' /></button>
                    <button className={`${grid===1 ? "alignment-icons  icon-selection" : "alignment-icons"}`}  onClick={()=> setGrid(1)}><RxHamburgerMenu className='fs-3' /></button>
                  </div>
                </div>
              </div>
              <div className={`col-12 grid-container grid-${grid} px-0 py-3 gap-20`}>
                {listProduct?.map((item, index) => 
                <ProductCard grid={grid} data={item} key={index} />)}
              </div>
              <div className="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <Link className="page-link" to="/our-store" tabIndex="-1" aria-disabled="true">Prev</Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="/our-store?page=1">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/our-store?page=2">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="/our-store?page=3">3</Link></li>
                    <li className="page-item">
                      <Link className="page-link" to="/our-store">Next</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default OurStore;