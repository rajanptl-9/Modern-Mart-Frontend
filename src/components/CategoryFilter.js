import React from 'react'

const CategoryFilter = (props) => {
    const { category, index, handleSetCategory,selectedCategory } = props;
    const handleClick = (e) => {   
        handleSetCategory(category._id);
    }

    return (
            <div style={{ color: selectedCategory === category._id ? "blue" : "inherit", cursor:"pointer" }}  id={category._id} key={category.title + index} onClick={() => handleClick()}>
                &nbsp; {category.title}
            </div>
    )
}

export default CategoryFilter