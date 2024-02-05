import React from 'react'

const CategoryCard = (props) => {
    return <>
    <div className="category d-flex justify-content-between  align-items-center px-2">
        <div>
            <p className='mb-1'><b>{props.title}</b></p>
            <p className='mb-0'>{props.desc}</p>
        </div>
        <img src={props.img} alt={props.title} height={props.height} width={props.width} />
    </div>
    </>
}

export default CategoryCard