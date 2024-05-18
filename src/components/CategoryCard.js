import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = (props) => {
    return <>
    <Link to={`/our-store?cat=${props._id}`} className="category d-flex justify-content-between  align-items-center px-2">
        <div>
            <p className='mb-1'><b>{props.title}</b></p>
            <p className='mb-0'>{props.desc}</p>
        </div>
        <img src={props.img} alt={props.title} height={props.height} width={props.width} />
    </Link>
    </>
}

export default CategoryCard