import { BtnContainer, NextBtn, PrevBtn, Wrapper } from "./StepperControl.styled"

const StepperControl = ({type,step, handleClick}) => {
  return (
    <Wrapper>
      <BtnContainer step={step}>
        <PrevBtn type="button" step={step} onClick={() => handleClick()}>Back</PrevBtn>
        <NextBtn  type="submit"  onClick={() => handleClick("next")}>{step === 1 ? "Submit Address":step === 2 ? "Place Order": step ===3 ? "Proceed Payment":"Submit" }</NextBtn>
      </BtnContainer>
    </Wrapper>
  )
}

export default StepperControl