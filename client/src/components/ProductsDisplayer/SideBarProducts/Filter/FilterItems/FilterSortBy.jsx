import styled from 'styled-components'
import {MdOutlineFilterAlt} from 'react-icons/md'

import Filter from '../Filter'

const FilterSortBy = () => {
  const onSubmitHandler = async(data) => {
    console.log("filter",data);
  }
  return (
    <SWrapper>
      <Filter 
        title="sort by"
        frontIcon ={ <MdOutlineFilterAlt />}
        sortByArr={sortByArr}
        onSubmit={onSubmitHandler}
      />
    </SWrapper>
  )
}

const SWrapper = styled.div``;

const sortByArr = [
  {
    name:"Newest",
    value:"newest"
  },
  {
    name:"Oldest",
    value:"oldest"
  },
  {
    name:"Best Sales",
    value:"-sold"
  },
  {
    name:"Price: High-Low",
    value:"-price"
  },
  {
    name:"Price: Low-High",
    value:"price"
  }
]

export default FilterSortBy