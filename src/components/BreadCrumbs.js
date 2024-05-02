import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = (props) => {
    return (
        <div className='breadcrumb-container bg-warning'>
            <div className="container-xxl">
                <div className="row">
                    <div aria-label="breadcrumb d-flex justify-content-center align-items-center">
                        <div className="breadcrumb m-0">
                            <span className="breadcrumb-item"><Link to="/">Home</Link></span>
                            {props.page!=='Home' && <span className="breadcrumb-item active" aria-current="page">{props.page}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbs;
