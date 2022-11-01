import { useDispatch,useSelector } from 'react-redux' 
import { closeCartNotify, removeCart } from '../../../app/feature/cartSlice'
import { SBtnContainer, SCancel, SContainer, SContent, SRemove, SWrapper } from './RemoveNotification.styled'

const RemoveNotification = ({product}) => {
 

  const dispatch = useDispatch()

  const removeItem = (product) => {
    console.log("Rembebebe",product);
    dispatch(removeCart(product))
    dispatch(closeCartNotify())
  }
  
  return (
    <SWrapper>
        <SContainer>
            <SContent>
                Do you want to remove the items ?
            </SContent>
            <SBtnContainer>
                <SCancel onClick={() => dispatch(closeCartNotify()) } >cancel</SCancel>
                <SRemove onClick={() => removeItem(product)}>remove</SRemove>
            </SBtnContainer>
        </SContainer>
    </SWrapper>
  )
}

export default RemoveNotification