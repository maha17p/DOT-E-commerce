import React from 'react'
import {useParams} from 'react-router-dom'


const CategoryItemPage = () => {
    const {category} = useParams;
    console.log({category});
  return (
    <div>{category}</div>
  )
}

export default CategoryItemPage