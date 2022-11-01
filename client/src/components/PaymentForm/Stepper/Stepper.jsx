import { useRef, useEffect, useState } from "react";
import { Description, Label, StepCompleted, StepDisplayWrapper, StepNumber, StepperContent, Wrapper } from "./Stepper.styled";

const Stepper = ({ step, stepForm }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newStep = [...steps];
    let count = 0;
    while (count < newStep.length) {
      if (count === stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newStep;
  };
  useEffect(() => {
    const stepState = stepForm.map((formTitle, index) => {
      return Object.assign(
        {},
        {
          description: formTitle,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      );
    });
    stepRef.current = stepState;
    const current = updateStep(step - 1, stepRef.current);
    setNewStep(current);
  }, [stepForm, step]);
  console.log("Neeeeew", newStep);
  const stepDisplay = newStep.map((step, index) => {
    return (
      <StepDisplayWrapper key={index}>
        <StepperContent>
          <StepNumber step={step}>
            {step.completed ? <Label>&#10003;</Label>: (index + 1) }
          </StepNumber>
          <Description step={step}>{step.description}</Description>
        </StepperContent>
      </StepDisplayWrapper>
    );
  });
  return <Wrapper>{stepDisplay}</Wrapper>;
};

export default Stepper;
