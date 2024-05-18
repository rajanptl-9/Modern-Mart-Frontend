import React, { useEffect, useState } from 'react';

var options = { year: 'numeric', month: 'long', day: 'numeric' };
const OrderProduct = (props) => {
    const { order, index } = props;
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < order.orderItems.length; i++) {
            total += order.orderItems[i].quantity * order.orderItems[i].price * 0.72;
        }
        setSubTotal(total);
        setTotalAmount(total + parseInt(shippingCharge));
        setShippingCharge(subTotal > 100 ? 0 : 20);
        // eslint-disable-next-line
    }, [order]);
    return (
        <div class="accordion-item mb-3">
            <h2 class="accordion-header" id={"flush-heading" + index}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + index} aria-expanded="false" aria-controls={"flush-collapse" + index}>
                    <div className="order-description">
                        <div className="order-details">
                            <div className='order-id'><span>Order ID:</span><br /> #{order._id}</div>
                            <div className='order-status text-center'><span>Status:</span><br /> {order.orderStatus}</div>
                            <div className='order-id  text-right'><span>Order Date:</span><br /> {new Date(order?.createdAt).toLocaleDateString("en-US", options)}</div>
                        </div>
                        <div className="shipping-details">
                            <div className='shipping-name'><b>Name:</b> {order.shippingInfo?.firstname} {order.shippingInfo?.lastname}</div>
                            <div className='shipping-address'><b>Ship to:</b> {order.shippingInfo?.address}, {order.shippingInfo?.city}, {order.shippingInfo?.postalCode}, {order.shippingInfo?.country}</div>
                        </div>
                        <div className='payment-details'>
                            <div className='payment-id'><span>Payment ID:</span><br /> {order?.paymentInfo?.razorpayPaymentId}</div>
                            <div className='payment-id total-amount'><span>Amount:</span><br /> <b>₹{order?.totalPrice}</b></div>
                            <div className='payment-id discounted-amount'><span>Payable Amount:</span><br />({order?.orderItems?.length} item/s) <b>₹{order?.totalPriceAfterDiscount}</b></div>
                        </div>
                    </div>

                </button>
            </h2>
            <div id={"flush-collapse" + index} class="accordion-collapse collapse" aria-labelledby={"flush-heading" + index} data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div className="w-100 right-content-checkout d-flex flex-column p-4">
                        <h4 className='mb-3'>Review Order</h4>
                        <div className='d-flex flex-column'>
                            <div className="d-flex flex-column py-2 border-bottom gap-20">
                                {order.orderItems && order.orderItems.map((product, index) => (
                                    <div key={product._id + index} className='product-review-checkout d-flex'>
                                        <span className='me-3 position-relative'>
                                            <img src={product.product?.images[0]?.url} alt="product" className='border rounded-3' height={60} width={60} />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                                {product?.quantity}
                                            </span>
                                        </span>
                                        <div className='w-100 d-flex justify-content-between'>
                                            <div className='product-desc-checkout d-flex flex-column justify-content-between'>
                                                <p className='fw-normal product-name-checkout mb-0'>{product?.product?.title}</p>
                                                <p className='fw-light product-color-checkout'>Color: {product?.color?.title} | #{product?.product?.tags[0]}</p>
                                            </div>
                                            <div className='product-price-checkout ps-1'>
                                                <p className="mb-0">₹{parseFloat(product?.price * 0.72).toFixed(2)}</p>
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
                                    {parseFloat(shippingCharge) !== 0 ? <span>₹{shippingCharge}</span> : <span className='text-success'>Free</span>}
                                </div>
                            </div>
                            <div className="total-amount-checkout pt-3">
                                <div className='d-flex justify-content-between ps-5 mb-2 align-items-end'>
                                    <span>Total Amount: ({order.orderItems.length} item/s) </span>
                                    <span className='d-flex align-items-center'>₹<b className="fs-4 fw-bold">{totalAmount}</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProduct