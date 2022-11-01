import React from "react";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import { bannerData } from "./OfferCarouselData";
const HomePage = () => {
  return (
    <>
      <MenuContainer />
      <OfferBanner bannerData={bannerData} />    
      <HomePageBanner />
    </>
  );
};



export default HomePage;
