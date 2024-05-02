import { React } from 'react';
import { Link } from 'react-router-dom';
import default_image from '../images/default_prodcut.jpeg'

const FeatureProduct = (props) => {
    const { data } = props;

    return (
        <Link to={`/our-store/${data._id}`} className='text-dark'>
            <div className="featured-card d-flex flex-column px-3 pt-3 position-relative" >
                <div className="d-flex justify-content-start align-items-start">
                    <div className='product-desc d-flex flex-column justify-content-center align-items-start p-1'>
                        <div className="company-name mt-1 fw-bold">{data.brand.title}</div>
                        <div className='product-name fw-bold text-start mb-0'>
                            <p className='mb-0'>{data.description.length > 60 ? data.description.slice(0, 60) + "..." : data.description}</p>
                        </div>
                        <div className='product-price'><p>₹ {data.price}</p></div>
                    </div>
                </div>
                <div className="featured-image-container">
                    {data.images ? <img src={data.images[0].url} key={data.images[0].url} alt="product" className='' /> : <img src={default_image} alt="product" className='img-fluid' />}
                </div>
            </div>
        </Link>
    )
}

export default FeatureProduct