import {useSelector} from 'react-router-dom'


const SingleProduct = () => {
const {singleProduct} = useSelector(store => store.product)
console.log("Singleeee", singleProduct);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct