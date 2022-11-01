import { useState, useEffect, useRef } from "react";
import { AiOutlineForward, AiOutlineBackward } from "react-icons/ai";
import {
  SForwardBtn,
  SIconContainer,
  SImg,
  SIndicateContainer,
  SIndicateItem,
  SIndicator,
  SOfferCarousel,
  SOfferCarouselInner,
  SOfferCarouselItem,
  SPrevBtn,
} from "./OfferBannner.styled";

const OfferBanner = ({ bannerData }) => {
  const [currSlide, setCurrSlide] = useState(0);
  const slideInterval = useRef();

  const prevBtnHandler = () => {
    startSlideTimer();
    const index = currSlide > 0 ? currSlide - 1 : bannerData.length - 1;
    setCurrSlide(index);
  };
  const forwardBtnHandler = () => {
    startSlideTimer();
    const index = currSlide < bannerData.length - 1 ? currSlide + 1 : 0;
    setCurrSlide(index);
  };
  const startSlideTimer = () => {
    stopsSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrSlide((currSlide) =>
        currSlide < bannerData.length - 1 ? currSlide + 1 : 0
      );
    }, 3000);
  };
  const stopsSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const switchIndex = (index) => {
    startSlideTimer()
    setCurrSlide(index)
  }

  useEffect(() => {
    startSlideTimer();
    return () => stopsSlideTimer();
  });
  return (
    <SOfferCarousel>
      {/* Slider */}
      <SOfferCarouselInner
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
  
        {bannerData.map((slide, index) => {
          return (
            <SOfferCarouselItem
              key={index}
              onMouseEnter={stopsSlideTimer}
              onMouseLeave={startSlideTimer}
            >
              <SImg src={slide.bgImage} />
            </SOfferCarouselItem>
          );
        })}
       

      </SOfferCarouselInner>
      {/* Slider */}

      {/* Forward and Backward Button */}
      <SIconContainer>
        <SPrevBtn onClick={prevBtnHandler}>
        <span>&#60;</span>
        </SPrevBtn>
        <SForwardBtn onClick={forwardBtnHandler}>
        <span>&#62;</span>
        </SForwardBtn>
      </SIconContainer>
      {/* Forward and Backward Button */}

      {/* Indicator  */}
      <SIndicateContainer>
        {bannerData.map((_, index) => (
          <SIndicateItem
            key={index}
            style={{ opacity: currSlide === index ? "1" : "0.5" }}
            onClick={() => switchIndex(index)}
          />
        ))}
      </SIndicateContainer>
    </SOfferCarousel>
  );
};

export default OfferBanner;
