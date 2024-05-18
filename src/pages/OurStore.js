import { React, useEffect, useState } from 'react'
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import { RxDragHandleVertical } from "react-icons/rx";
import ProductCard from '../components/ProductCard';
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import { getColors } from '../features/color/colorSlice';
import { ToastContainer} from 'react-toastify';
import { getCategories } from '../features/category/categorySlice';
import CategoryFilter from '../components/CategoryFilter';
import BrandFilter from '../components/BrandFilter';
import { getBrands } from '../features/brand/brandSlice';
import { IoSearch } from "react-icons/io5";
import { useSearchParams } from 'react-router-dom';
const OurStore = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const productState = useSelector(state => state.product.products);
  const totalPages = useSelector(state => state.product.pages);  
  // const colorState = useSelector(state => state.color.colors);
  const categoryState = useSelector(state => state.category.categories);
  const brandState = useSelector(state => state.brand.brands)
  const wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
  const wishlistState = useSelector(state => state.wishlist);

  const isInWishlist = (productId) => {
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i]._id === productId) {
        return true;
      }
    }
    return false;
  };

  const listProduct = [];
  if (productState) {
    for (let i = 0; i < productState.length; i++) {
      listProduct.push({
        _id: productState[i]._id,
        title: productState[i].title.length > 50 ? productState[i].title.slice(0, 50) + "..." : productState[i].title,
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

  const [grid, setGrid] = useState(4);
  // eslint-disable-next-line
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryAll, setcategoryAll] = useState(false)
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brandAll, setBrandAll] = useState(false)
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  const [priceRange, setPriceRange] = useState({ min: null, max: null })
  const [sort, setSort] = useState(null)
  const [page, setPage] = useState(1);
  // const [isChecked, setIsChecked] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  };

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  const handleSetCategory = (id) => {
    if (id === 'all-category') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(id);
    }
    setPage(1);
  };

  const handleSetBrand = (id) => {
    if (id === 'all-brands') {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(id);
    }
    setPage(1);
  };

  const handlePriceRange = () => {
    if (minPrice) {
      setPriceRange({ min: minPrice })
    } else {
      setPriceRange({ min: null })
    }
    if (maxPrice) {
      setPriceRange({ max: maxPrice })
    } else {
      setPriceRange({ max: null })
    }
    setPriceRange({ min: minPrice, max: maxPrice })
  }

  useEffect(() => {
    dispatch(getProducts({ category: selectedCategory, brand: selectedBrand, priceRange, sort,page }));
    // eslint-disable-next-line
  }, [selectedBrand, selectedCategory, priceRange, sort,page])

  useEffect(() => {
    const currCategory = searchParams.get('cat');
    setSelectedCategory(currCategory);
    
    dispatch(getProducts({ category: null, brand: null, priceRange: { min: null, max: null },sort:null,page }));
    dispatch(getColors());
    dispatch(getCategories());
    dispatch(getBrands());
    //eslint-disable-next-line
  }, [dispatch, wishlistState.wishlist,searchParams]);

  useEffect(() => {
    if (categoryState) {
      let list = [];
      categoryState.map((category) => list.push(category));
      setCategories(list);
    }
  }, [categoryState]);

  useEffect(() => {
    if (brandState) {
      let list = brandState.map(brand => brand);
      setBrands(list);
    }
  }, [brandState]);

  return (
    <>
      <MetaTags title="Our Store | Modern Mart" />
      <BreadCrums page="Our-Store" />
      <ToastContainer />
      <section className="store-wrapper py-3">
        <div className="container-xxl">
          <div className="row ps-2">
            <div className="col-3">
              {categoryState &&
                <div className="filter-card">
                  <h5>Shop By Categories</h5>
                  <div style={{ height: categoryAll ? "fit-content" : "148px", overflowY: !categoryAll && "hidden" }}>
                    <div style={{ color: !selectedCategory ? "blue" : "inherit", cursor: "pointer" }} id='all-category' key="all-category" onClick={e => { handleSetCategory(e.target.id) }} >
                      &nbsp; All Categories
                    </div>
                    {categories.map((category, index) => (
                      <CategoryFilter key={index} category={category} selectedCategory={selectedCategory} handleSetCategory={handleSetCategory} />
                    ))}
                  </div>
                  <button className='bg-white border-0 ms-2 text-primary' onClick={() => setcategoryAll(!categoryAll)}>{categoryAll ? "-less" : "+more..."}</button>
                </div>}
              <div className="filter-card">
                <h5>Filter By</h5>
                <div className='ms-2 mt-3'>
                  {/* <h6>Availability</h6>
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
                  </div> */}
                </div>
                <div className='ms-2 mt-3'>
                  <h6>Price</h6>
                  <div className='d-flex justify-content-between align-items-center gap-1'>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='from' value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                    </div>
                    {/* <div><p className='mx-3'></p></div> */}
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='to' value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                    </div>
                    <button className='btn btn-white border-1 border-primary fs-5 py-2 d-flex align-items-center' onClick={() => handlePriceRange()}><IoSearch /></button>
                  </div>
                </div>
                {/* {colorState && <div className="ms-2 mt-2">
                  <h6>Color</h6>
                  <div className='color-pallete d-flex justify-content-between align-items-center flex-wrap'>
                    {colorState.map((color, index) => <div key={index} className='color-pallete-item' style={{ backgroundColor: color.title, border: `₹{color.title=== "White" ? "1px solid black" : ""}` }} onClick={(e) => console.log(e.target.style.backgroundColor)}></div>)}
                  </div>
                </div>} */}
                <div className='ms-2 mt-4'>
                  <h6>Brands</h6>
                  <div style={{ height: brandAll ? "fit-content" : "172px", overflowY: !brandAll && "hidden" }}>
                    <div style={{ color: !selectedBrand ? "blue" : "inherit", cursor: "pointer" }} id='all-brands' key="all-brand" onClick={e => { handleSetBrand(e.target.id) }} >
                      &nbsp; All Brands
                    </div>
                    {brands.map((brand, index) =>
                    (
                      <BrandFilter key={index} brand={brand} selectedBrand={selectedBrand} handleSetBrand={handleSetBrand} />
                    ))}
                  </div>
                  <button className='bg-white border-0 ms-2 text-primary' onClick={() => setBrandAll(!brandAll)}>{brandAll ? "-less" : "+more..."}</button>
                </div>
              </div>
              {/* <div className="filter-card product-tag-filter">
                <h5 className='mb-0'>Product Tags</h5>
                <div className='d-flex justify-content-start gap-8 flex-wrap'>
                  <h2 className='my-0 py-0'><button className="tags-product">#Headphones</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Tablet</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Gaming</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Music</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Apple</button></h2>
                  <h2 className='my-0 py-0'><button className="tags-product">#Samsung</button></h2>
                </div>
              </div> */}
              {/* <div className="filter-card">
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
              </div> */}
            </div>
            <div className="col-9 d-flex flex-column align-items-start">
              <div className="col-12 d-flex justify-content-between px-4 py-1 border border-gray rounded-3 bg-white">
                <div className='d-flex d-inline align-items-center gap-10'>
                  <span className='d-inline'>Sort By:</span>
                  <span><select name="" id="" className="form-select form-control border border-#7e9ec9 fs-6" onChange={(e) => setSort(e.target.value)}>
                    <option value={null}>Default</option>
                    <option value="title">Name A-Z</option>
                    <option value="-title">Name Z-A</option>
                    <option value="price">Price-Low to High</option>
                    <option value="-price">Price-High to Low</option>
                    <option value="createdAy">Oldest to Latest</option>
                    <option value="-createdAt">Latest to Oldest</option>
                  </select></span>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-10">
                  <div>{productState ? productState.length : 0} Products</div>
                  <div className="alignments d-flex gap-8">
                    <button className={`${grid === 4 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={() => { setGrid(4); }}><RxDragHandleVertical className='fs-3' /></button>
                    <button className={`${grid === 2 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={() => setGrid(2)}><LiaGripLinesVerticalSolid className='fs-4' /></button>
                    <button className={`${grid === 1 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={() => setGrid(1)}><RxHamburgerMenu className='fs-3' /></button>
                  </div>
                </div>
              </div>
              <div className={`col-12 grid-container grid-${grid} px-0 py-3 gap-20`}>
                {listProduct?.map((item, index) =>
                  <ProductCard grid={grid} data={item} key={index} />)}
              </div>
              {totalPages !==null && <div className="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${page===1? "disabled":""}`} style={{'cursor':'pointer'}} >
                      <span className="page-link" to="/our-store" tabIndex="-1" aria-disabled={page === 1} onClick={()=>{setPage(page-1);scrollToTop();}}>Prev</span>
                    </li>
                    <span className="page-item"><span className="page-link">{page}</span></span>
                    <li className={`page-item ${page+1>totalPages? "disabled":""}`} style={{'cursor':'pointer'}} >
                      <span className="page-link" onClick={()=>{setPage(page+1);scrollToTop();}} aria-disabled={page+1>totalPages}>Next</span>
                    </li>
                  </ul>
                </nav>
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStore;