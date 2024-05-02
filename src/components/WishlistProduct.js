import React from 'react'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/wishlist/wishlistSlice';
import { ImBin2 } from "react-icons/im";

const WishlistProduct = (props) => {
    const {product, index} = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log(product._id);                
        const body = { prodId: product._id };
        dispatch(addToWishlist(body));
    }

    return (
        <>
            <div key={index} id={`${product._id}`} className="product-container-wishlist d-flex col-12 justify-content-start position-relative gap-3 p-1 pe-3">
                <ImBin2 id={`${product._id}`} onClick={(e) => handleDelete(e.target.id)} className="remove-product-wishlist" />
                <img src={product.images && product.images.length > 0 ? product.images[0].url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixhVlw7nIsHPRV9L88sM7IWShylGYmCYXZqLbtioxKA&s"} alt="product" height={116} />
                <div className='product-details-wishlist d-flex flex-column justify-content-center pe-4'>
                    <h6 className='mb-1'><a href={"/our-store/"+product._id}>{product.title}</a></h6>
                    <h5 className='mb-2'>{product.brand}</h5>
                    <p className='mb-2'>{product.quantity > 0 ? "In Stock" : "Out of stock"}</p>
                    <h4>₹{product.price}</h4>
                </div>
            </div>
        </>
    )
}

export default WishlistProduct