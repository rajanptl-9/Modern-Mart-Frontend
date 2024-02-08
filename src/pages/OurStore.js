import { React, useState } from 'react'
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';
import ps5 from '../images/ps5.jpg';
import StarRatings from 'react-star-ratings';
import { RxDragHandleVertical } from "react-icons/rx";
import ProductCard from '../components/ProductCard';
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
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
      <section className="store-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
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
                    <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='from' />
                    </div>
                    <div><p className='mx-3'></p></div>
                    <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='to' />
                    </div>
                  </div>
                </div>
                <div className="ms-2 mt-2">
                  <h6>Color</h6>
                  <div className='color-pallete d-flex justify-content-between align-items-center flex-wrap'>
                    <div style={{ backgroundColor: "black" }}></div>
                    <div style={{ backgroundColor: "red" }}></div>
                    <div style={{ backgroundColor: "green" }}></div>
                    <div style={{ backgroundColor: "blue" }}></div>
                    <div style={{ backgroundColor: "yellow" }}></div>
                    <div style={{ backgroundColor: "gray" }}></div>
                    <div style={{ backgroundColor: "orange" }}></div>
                    <div style={{ backgroundColor: "pink" }}></div>
                    <div style={{ backgroundColor: "white", border: "1px solid black" }}></div>
                    <div style={{ backgroundColor: "brown" }}></div>
                    <div style={{ backgroundColor: "violet" }}></div>
                    <div style={{ backgroundColor: "Magenta" }}></div>
                    <div style={{ backgroundColor: "Indigo" }}></div>
                    <div style={{ backgroundColor: "Maroon" }}></div>
                    <div style={{ backgroundColor: "Teal" }}></div>
                    <div style={{ backgroundColor: "olive" }}></div>
                  </div>
                </div>
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
                  <h2 className='my-0 py-0'><button class="badge p-2">Headphones</button></h2>
                  <h2 className='my-0 py-0'><button class="badge p-2">Tablet</button></h2>
                  <h2 className='my-0 py-0'><button class="badge p-2">Gaming</button></h2>
                  <h2 className='my-0 py-0'><button class="badge p-2">Music</button></h2>
                  <h2 className='my-0 py-0'><button class="badge p-2">Apple</button></h2>
                  <h2 className='my-0 py-0'><button class="badge p-2">Samsung</button></h2>
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
                        <div className='pt-2'><h6>$499.99</h6></div>
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
                        <div className='pt-2'><h6>$499.99</h6></div>
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
                  <div>{21} Products</div>
                  <div className="alignments d-flex gap-8">
                    <button className={`${grid===4 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={()=> {setGrid(4);}}><RxDragHandleVertical className='fs-3' /></button>
                    <button className={`${grid===2 ? "alignment-icons  icon-selection" : "alignment-icons"}`} onClick={()=> setGrid(2)}><LiaGripLinesVerticalSolid className='fs-4' /></button>
                    <button className={`${grid===1 ? "alignment-icons  icon-selection" : "alignment-icons"}`}  onClick={()=> setGrid(1)}><RxHamburgerMenu className='fs-3' /></button>
                  </div>
                </div>
              </div>
              <div className={`col-12 grid-container grid-${grid} px-0 py-3 gap-20`}>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                {/* <ProductCard_landscape/>
                <ProductCard_landscape/> */}
              </div>
              <div className="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <Link class="page-link" to="/our-store" tabIndex="-1" aria-disabled="true">Prev</Link>
                    </li>
                    <li class="page-item"><Link class="page-link" to="/our-store?page=1">1</Link></li>
                    <li class="page-item"><Link class="page-link" to="/our-store?page=2">2</Link></li>
                    <li class="page-item"><Link class="page-link" to="/our-store?page=3">3</Link></li>
                    <li class="page-item">
                      <Link class="page-link" to="/our-store">Next</Link>
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