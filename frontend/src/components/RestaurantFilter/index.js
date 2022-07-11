import React from 'react'

import {
FilterWrapper,
FilterInput,
FilterButton,
// FilterWrapper,
// FilterWrapper,
// FilterWrapper,
// FilterWrapper,
// FilterWrapper,
} from '../../styles/RestaurantFilter'

const ResturantFilter = () => {
  return ( 
    <FilterWrapper>
      <FilterInput type='text' name="filterlist" placeholder= 'Filter list...' />
      <FilterButton>Filter</FilterButton>
    </FilterWrapper>
   );
}
 
export default ResturantFilter ;