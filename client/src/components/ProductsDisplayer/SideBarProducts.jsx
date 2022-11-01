import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getCategories } from '../../app/feature/categorySlice'
import { FilterSortBy , FilterCategory, FilterOthers, FilterRatings} from './SideBarProducts/Filter/FilterItems'
import styled from "styled-components";
import { size,fontSize } from "../../styles/variable.styled";




const SideBarProducts = () => {

    const dispatch = useDispatch()
    // const {category} = useSelector(store => store.category)
    // console.log({category});
    // useEffect(() =>  {
    //     dispatch(getCategories())
    // },[dispatch])
  return (
    <SWrapper>
            <SFilter>
                {/* <FilterCategory category={category}  /> */}
                {/* <FilterSortBy /> */}
                <FilterRatings />
                <FilterOthers />
            </SFilter>
    </SWrapper>
  )
}

export const SWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 ${fontSize.mdSpacing};
`;

export const SSideBarItems = styled.div``;
export const SFilter = styled.div`
    & > div {
        padding: ${fontSize.mdtfSpacing} 0;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }
`;
 
export default SideBarProducts