import { useState } from "react";
import { TbArrowsSort, TbRouteOff } from "react-icons/tb";
import {
  MdOutlineCategory,
  MdFilterList,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import {
  IoMdArrowDropright,
  IoMdArrowDropdown,
  IoMdClose,
} from "react-icons/io";
import { CategoryProducts, FilterProducts, SortByProducts } from "./index";
import {
  SBackIcon,
  SBoxContainer,
  SCloseIcon,
  SFrontICon,
  SItemContainer,
  SMainContent,
  SMainSideContainer,
  SSideProductsItem,
  SSubSideContainer,
  STitle,
  SWrapper,
} from "./SidebarProducts.styled";

const SidebarProducts = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [data, setData] = useState([]);

  const subSideBarHandler = () => {
    setShowSideBar(!showSideBar);
  };
  const sideBarHandler = (title) => {
    const result = sidebarProductsArr.filter(
      ({ mainTitle }) => mainTitle === title
    );
    setData(result);
  };

  return (
    <SWrapper>
      <SBoxContainer>
        <SItemContainer>
          {sidebarProductsArr.map((item, index) => {
            return (
              <>
                <SSideProductsItem
                  key={index}
                  onClick={() => sideBarHandler(item.mainTitle)}
                >
                  <SFrontICon onClick={subSideBarHandler}>
                    {item.frontIcon}
                  </SFrontICon>
                  <STitle>{item.mainTitle}</STitle>
                  <SBackIcon onClick={subSideBarHandler}>
                    {item.backIconRight}
                  </SBackIcon>
                </SSideProductsItem>
              </>
            );
          })}
        </SItemContainer>
        {showSideBar && (
          <SSubSideContainer>
            <SMainSideContainer>
              <SCloseIcon onClick={subSideBarHandler}>
                <IoMdClose />
              </SCloseIcon>
              {data.map((item, index) => {
                return (
                  <>
                    <SMainContent key={index}>
                      {item.subSideComponent}
                    </SMainContent>
                  </>
                );
              })}
            </SMainSideContainer>
          </SSubSideContainer>
        )}
      </SBoxContainer>
    </SWrapper>
  );
};

const subSideItem = [
  {
    name: "Men",
    backIconRight: <MdOutlineKeyboardArrowRight />,
    backIconDown: <MdOutlineKeyboardArrowDown />,
    subItem: ["Shirts", "T-Shirts", "Pants"],
  },
  {
    name: "Women",
    backIconRight: <MdOutlineKeyboardArrowRight />,
    backIconDown: <MdOutlineKeyboardArrowDown />,
    subItem: ["Shirts", "T-Shirts", "Pants"],
  },
  {
    name: "Kids",
    backIconRight: <MdOutlineKeyboardArrowRight />,
    backIconDown: <MdOutlineKeyboardArrowDown />,
    subItem: ["Shirts", "T-Shirts", "Pants"],
  },
];

const sidebarProductsArr = [
  {
    frontIcon: <MdOutlineCategory />,
    mainTitle: "category",
    backIconRight: <IoMdArrowDropright />,
    backIconDown: <IoMdArrowDropdown />,
    subSideComponent: <CategoryProducts subSideItem={subSideItem} />,
  },
  {
    frontIcon: <MdFilterList />,
    mainTitle: "filter",
    backIconRight: <IoMdArrowDropright />,
    backIconDown: <IoMdArrowDropdown />,
    subSideComponent: <FilterProducts />,
  },
  {
    frontIcon: <TbArrowsSort />,
    mainTitle: "sort by",
    backIconRight: <IoMdArrowDropright />,
    backIconDown: <IoMdArrowDropdown />,
    subSideComponent: <SortByProducts />,
  },
];

export default SidebarProducts;
