import React from 'react'
import SubBanner from './SubBanner'
import SubBarBanner from './SubBarBanner'

const HomePageBanner = () => {
  return (
    <div>
        {/* 
        <SubScrollBanner  />
        <SubScrollBanner />
      <SubScrollBanner */}
        {/* {/* <SubBanner /> */}
        {/* <SubBanner /> */}
        {/* <SubBanner />  */}

        {/* Deals of the day */}
        {/* Recent View Products */}
        {/* New Products */}
        {/* Trending Products */}
        {/* <SubScrollBanner  /> */}
        {/* <SubBarBanner title={"new products"}  />*/}
      <SubBanner title={"Deals of the Day"} />
        <SubBarBanner title={"Recent View Products"} />
        <SubBarBanner title={"Trending Products"}  />
        <SubBarBanner title={"Recommended Products"} /> 
    </div>
  )
}

export default HomePageBanner