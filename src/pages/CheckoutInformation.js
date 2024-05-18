import { React, useEffect, useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from '../features/cart/cartSlice';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from '../utils/config';
import { base_url } from '../utils/base_url';
import { GiConfirmed } from "react-icons/gi";
import axios from 'axios';
import { razorpayKey, razorpayScript } from '../utils/constants';
import { createOrder } from '../features/order/orderSlice';
import { resetState } from '../features/order/orderSlice';

const CheckoutInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector(state => state.cart.cartlist);
  const [pages, setPages] = useState("information");
  const [selectedOption, setSelectedOption] = useState("saved-address");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("India");
  const [pincode, setPincode] = useState("000000");
  const [totalMRP, setTotalMRP] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shippinCharge, setshippinCharge] = useState(0);
  const [totalAmount, setTotalAmount] = useState(subTotal + shippinCharge);
  const [shippingAddress, setshippingAddress] = useState({});
  const [orderState, setOrderState] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState({ razorpayPaymentId: "" });
  const { placedOrder, message } = useSelector(state => state.order);
  const handleAccordionToggle = (id) => {
    setSelectedOption(id);
  };

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const handleInformation = () => {
    if (!address) {
      toast.warn('Please Enter Address!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    } else if (!area) {
      toast.warn('Please Enter Area!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    } else if (!city) {
      toast.warn('Please Enter City!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    } else if (pincode === "000000" || !(/^[1-9][0-9]{5}$/.test(pincode))) {
      toast.warn('Please Enter Pincode!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    } else {
      let currentAddress = {
        firstname: user?.firstname,
        lastname: user?.lastname,
        address: address,
        city: city,
        state: state,
        pincode: parseInt(pincode),
        other: area,
      }
      setshippingAddress(currentAddress);
      setPages("shopping");
      scrollToTop();
    }
  };

  const loadScript = src => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      }
      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script);
    });
  };

  const checkoutHandler = async () => {
    const response = await loadScript(razorpayScript);
    if (!response) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await axios.post(base_url + 'user/order/checkout', {}, config);
    if (!result) {
      alert('Server error. Are you online?');
      return;
    }
    const { id: order_id, currency } = result.data.response;
    const options = {
      key: razorpayKey,
      amount: totalAmount * 100, // value should be in paise  (100 = 1rs)
      currency: currency,
      name: 'Modern Mart',
      description: 'Purchase made from Modern-mart',
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };
        const result = await axios.post(base_url + 'user/order/payment-verification', data, config);
        setPaymentInfo(result.data);
      },
      prefill: {
        name: user?.firstname + " " + user?.lastname,
        email: user?.email,
        contact: user?.mobile
      },
      notes: {
        address: shippingAddress
      },
      theme: {
        color: '#3399cc'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  };

  useEffect(() => {
    if (paymentInfo.razorpayPaymentId) {
      dispatch(createOrder({ shippingInfo: shippingAddress, orderItems: orderState, paymentInfo: paymentInfo, totalPrice: totalMRP, totalPriceAfterDiscount: parseInt(totalAmount), paidAt: new Date() }));
    }
    //eslint-disable-next-line
  }, [paymentInfo]);

  useEffect(() => {
    if (placedOrder) {
      if (message) {        
        setPages("order");
        dispatch(clearCart());
      }
    }
    //eslint-disable-next-line
  }, [placedOrder, message]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (cartState) {
      let mrp = 0;
      let total = 0;
      cartState.forEach(item => {
        total += item.price * item.quantity * 0.72;
        mrp += item.price * item.quantity;
      });
      setSubTotal(parseInt(total).toFixed(2));
      setTotalMRP(mrp);
      let shipCharge = 0;
      if (total > 100) {
        shipCharge = 0;
      } else {
        shipCharge = 20;
      }
      setshippinCharge(parseInt(shipCharge).toFixed(2));
      setTotalAmount(parseInt(subTotal + shippinCharge).toFixed(2));
      const order = cartState.map(item =>
      ({
        product: item.productId._id,
        quantity: item.quantity,
        color: item.color._id,
        price: item.price,
      })
      );
      setOrderState(order);

    }
    //eslint-disable-next-line
  }, [cartState]);

  return (
    <>
      <ToastContainer />
      {cartState && <div className="checkout-container p-3">
        <div className="left-content-checkout d-flex flex-column p-3">
          {pages !== "order" && <div className='mb-3'>
            <span><Link to="/cart">Cart</Link></span> {'  >  '}
            <span><Link to="/checkout" style={pages === "information" ? { textDecoration: "underline" } : { textDecoration: "none" }}>Information</Link></span> {'  >  '}
            <span><Link to="/checkout" style={pages === "shopping" ? { textDecoration: "underline" } : { textDecoration: "none" }}>Shopping</Link></span> {'  >  '}
            <span><Link to="/checkout" style={pages === "order" ? { textDecoration: "underline" } : { textDecoration: "none" }}>Order</Link></span>
          </div>}
          {pages === "information" && <>
            <div className='mb-4'>
              <h4 className='mb-1'>Contact Information</h4>
              <table className='user-details'>
                <tbody>
                  <tr>
                    <td><b>User Name:</b></td>
                    <td className='px-3'>{user?.firstname} {user?.lastname}</td>
                  </tr>
                  <tr>
                    <td><b>Phone No:</b></td>
                    <td className='px-3'>+1 {user?.mobile}</td>
                  </tr>
                  <tr>
                    <td><b>Email id:</b></td>
                    <td className='px-3'>{user?.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className='mb-3'>Choose Shipping Address</h4>
            <div className="accordion mb-4" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => handleAccordionToggle("new-address")}>
                    <input type="radio" name="select-address" id="new-address" checked={selectedOption === "new-address"} onChange={() => { }} />
                    &nbsp;&nbsp; Add New Shipping Address
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <form action='' className="d-flex justify-content-between gap-20 flex-wrap" method="post">
                      <div className='w-100 form-floating'>
                        <input type="text" className="form-control" id="floatingAddress" placeholder="name@example.com" value={address} onChange={e => setAddress(e.target.value)} required />
                        <label htmlFor="floatingAddress">Address(*)</label>
                      </div>
                      <div className='w-100 form-floating'>
                        <input type="text" className="form-control" id="floatingArea" placeholder='select area' value={area} onChange={e => setArea(e.target.value)} required />
                        <label htmlFor="floatingArea">Area/Landmark etc. (optional)</label>
                      </div>
                      <div className='col form-floating'>
                        <input type="text" className="form-control" id="floatingCity" placeholder='select city' value={city} onChange={e => setCity(e.target.value)} required />
                        <label htmlFor="floatingCity">City</label>
                      </div>
                      <div className="col form-floating">
                        <select id="floatingState" aria-label="Floating label select example" className="form-control form-select" placeholder="select Country" value={state} onChange={e => setState(e.target.value)}>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">UK</option>
                        </select>
                        <label htmlFor="floatingState">State(*)</label>
                      </div>
                      <div className='col form-floating'>
                        <input type="text" className="form-control" id="floatingInput" placeholder='select pincode' value={pincode} onChange={e => setPincode(e.target.value)} required />
                        <label htmlFor="floatingFname">Pin Code</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/**<div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => handleAccordionToggle("saved-address")}>
                  <input type="radio" name="select-address" id="saved-address" checked={selectedOption === "saved-address"}  onChange={()=>{}}/>
                  &nbsp;&nbsp; Saved Shipping Address
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='d-flex'>
                    <div className='me-2'><b>Address:</b></div>
                    <div>Saved Address</div>
                  </div>
                </div>
              </div>
            </div>*/}
            </div>
            <div className='w-100 d-flex justify-content-between'>
              <Link to={"/cart"} className='fs-6'><b><IoMdArrowRoundBack /> <u>Return to Cart</u></b></Link>
              <button onClick={() => handleInformation()} className="button-inverse">Review Shopping <IoMdArrowRoundForward className='fs-4' /></button>
            </div>
          </>}
          {pages === "shopping" && <>
            <div className="d-flex flex-column py-2 px-3 border rounded-3 mb-5">
              <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                <div className="w-10">E-mail</div>
                <div className="w-80">{user?.email}</div>
                <div className="w-10"></div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-2">
                <div className="w-10">Ship to</div>
                <div className="w-80">{address + " " + state + "-" + pincode}</div>
                <div className="w-10" onClick={() => setPages("information")} style={{ cursor: "pointer" }}>Change</div>
              </div>
            </div>
            <h4 className='mb-3'>Shipping Method</h4>
            <div className="d-flex flex-column p-3 border rounded-3 mb-4">
              <div className="d-flex align-items-center justify-content-between px-2">
                <div className="w-10 d-flex align-items-center"><input type="radio" name="" id="" checked onChange={() => { }} /> &nbsp;&nbsp;Stardard</div>
                <div className="w-80"></div>
                <div className="w-10">{parseInt(shippinCharge) !== 0 ? <span>₹{shippinCharge}</span> : <span className='text-success'>Free</span>}</div>
              </div>
            </div>
            <div className='w-100 d-flex justify-content-between'>
              <button onClick={() => setPages("information")} className='fs-6 border-0 bg-white text-primary'><b><IoMdArrowRoundBack /> <u>Return to Information</u></b></button>
              <button className="button-inverse" onClick={() => checkoutHandler()}>Go to Payment<IoMdArrowRoundForward className='fs-4' />
              </button>
            </div>
          </>}
          {pages === "order" && placedOrder &&
            <div className='w-100 d-flex justify-content-between flex-column'>
              <div><h2 className='d-flex align-items-center'><GiConfirmed className='text-success me-1' /> Thank You For Shopping!</h2></div>
              <div><p className='ms-1'>Your order have been placed successfully.</p></div>
              <table className='order-details'>
                <tbody>
                  <tr>
                    <td><b>Order Id:</b></td>
                    <td className='px-3'>#{placedOrder._id}</td>
                  </tr>
                  <tr>
                    <td><b>Payment Id:</b></td>
                    <td className='px-3'>{placedOrder.paymentInfo.razorpayPaymentId}</td>
                  </tr>
                  <tr>
                    <td><b>Payment Method:</b></td>
                    <td className='px-3'>Online Payment</td>
                  </tr>
                  <tr>
                    <td><b>Order Date:</b></td>
                    <td className='px-3'>{new Date(placedOrder.paidAt).toUTCString()}</td>
                  </tr>
                  <tr>
                    <td><b>Name: </b></td>
                    <td className='px-3'>{user?.firstname} {user?.lastname}</td>
                  </tr>
                  <tr>
                    <td><b>Phone No:</b></td>
                    <td className='px-3'>+1 {user?.mobile}</td>
                  </tr>
                  <tr>
                    <td><b>Shipping Address:</b></td>
                    <td className='px-3'>{placedOrder.shippingInfo.address + ", " + placedOrder.shippingInfo.city + ", " + placedOrder.shippingInfo.other + ", " + placedOrder.shippingInfo.state + "-" + placedOrder.shippingInfo.pincode}</td>
                  </tr>
                </tbody>
              </table>
              <div className='d-flex justify-content-end p-3'><button className='button-inverse' onClick={() => {
                dispatch(resetState());
                scrollToTop(); navigate("/");
              }}> Continue Shopping</button></div>
            </div>}
        </div>
        <div className="right-content-checkout d-flex flex-column p-4">
          <h4 className='mb-3'>Review Products</h4>
          <div className='d-flex flex-column'>
            <div className="d-flex flex-column py-2 border-bottom gap-20">
              {cartState && cartState.map((item, index) => (
                <div key={item._id + index} className='product-review-checkout d-flex'>
                  <span className='me-3 position-relative'>
                    <img src={item?.productId?.images[0]?.url} alt="product" className='border rounded-3' height={60} width={60} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                      {item?.quantity}
                    </span>
                  </span>
                  <div className='w-100 d-flex justify-content-between'>
                    <div className='product-desc-checkout d-flex flex-column justify-content-between'>
                      <p className='fw-normal product-name-checkout mb-0'>{item?.productId?.title}</p>
                      <p className='fw-light product-color-checkout'>Color: {item?.color?.title} | #{item?.productId?.tags[0]}</p>
                    </div>
                    <div className='product-price-checkout ps-1'>
                      <p className="mb-0">₹{parseInt(item?.price * 0.72).toFixed(2)}</p>
                    </div>
                  </div>
                </div>))}
            </div>
            <div className="subtotal-amount-checkout py-3 border-bottom">
              <div className='d-flex justify-content-between ps-5 mb-2'>
                <span>Sub-total Amount: </span>
                <span>₹{subTotal}</span>
              </div>
              <div className='d-flex justify-content-between ps-5'>
                <span>Shipping Amount: </span>
                {parseInt(shippinCharge) !== 0 ? <span>₹{shippinCharge}</span> : <span className='text-success'>Free</span>}
              </div>
            </div>
            <div className="total-amount-checkout pt-3">
              <div className='d-flex justify-content-between ps-5 mb-2 align-items-end'>
                <span>Total Amount: ({cartState.length} item/s) </span>
                <span className='d-flex align-items-center'>₹<b className="fs-4 fw-bold">{totalAmount}</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default CheckoutInformation;