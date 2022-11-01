import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changePage } from "../app/feature/products/productSlice";
import { btnReset, flexCenter } from "../styles/variable.styled";

const PaginationContainer = () => {
  const { numOfPages,page } = useSelector((store) => store.products);
  const pageNumber = [];
   const dispatch = useDispatch()
  for (let i = 1; i < numOfPages + 1; i++) {
    pageNumber.push(i);
  }

  const prevPage  = () => {
    let newPage = page-1;
    if(newPage <1){
      newPage =  numOfPages;
    }
    dispatch(changePage(newPage))
  }
  const nextPage  = () => {
    let newPage = page +1
    if(newPage > numOfPages){
      newPage = 1;
    }
    dispatch(changePage(newPage))
  }


  console.log({ numOfPages });
  return (
    <>
      {numOfPages > 1 && (
        <PageContainer>
          <div>
            <button onClick={prevPage} className="btn arrow">
              <HiChevronDoubleLeft />
            </button>
            <div className="main-page">
              {pageNumber.map((pageNum) => (
                <button 
                key={pageNum}
                onClick={() => dispatch(changePage(pageNum))} className={`btn ${pageNum === page && "page"} `}>
                  {pageNum}
                </button>
              ))}
            </div>
            <button onClick={nextPage} className="btn arrow">
              <HiChevronDoubleRight />
            </button>
          </div>
        </PageContainer>
      )}
    </>
  );
};

const PageContainer = styled.div`
  ${flexCenter}
  margin-top: 1rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 15rem;
    background: ${({ theme }) => theme.white};
    padding: 0.5rem;
    border-radius: 0.25rem;
    .btn {
      ${btnReset}
    }
    .arrow {
      color: ${({ theme }) => theme.primary};
      ${flexCenter}
      border-radius: 0.25rem;
      font-weight:500;
    }
    .main-page {
        
    }
    .page {
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
      border-radius: 0.25rem;
      font-weight: 500;
      padding: 0 6px;
      margin: 0 0.5rem;
    }
    
  }
`;

export default PaginationContainer;
