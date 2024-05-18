import React from 'react'

const BrandFilter = (props) => {
    const { brand, index, handleSetBrand,selectedBrand } = props;
    const handleClick = () => {   
        handleSetBrand(brand._id);
    }

    return (
            <div style={{ color: selectedBrand === brand._id ? "blue" : "inherit", cursor:"pointer" }}  id={brand._id} key={brand.title + index} onClick={() => handleClick()}>
                &nbsp; {brand.title}
            </div>
    )
}

export default BrandFilter