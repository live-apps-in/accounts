import StepWizard from "react-step-wizard";
import styled from "styled-components";
import { FileUpload } from "./file-upload";
import { EditImage } from "./edit-image";
import { useEffect, useState } from "react";

const StepWrapper = styled(StepWizard)(`
  position: fixed;
  top: 0;
  left: 0;
  // z-index: ;
  & > div,
  & > div > div,
  & {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: grid;
    place-items: center;
  }
`
);

export const ImageEditorPopup = (props) => {
  const { onEditEnd, onRemove, onClose, value } = props;

  const [fileDetails, setFileDetails] = useState(null);
  useEffect(() => {
    setFileDetails((prev) => ({ ...prev, base64: value }));
  }, [value]);

  return (
    <StepWrapper isLazyMount initialStep={value ? 2 : 1}>
      <FileUpload
        value={fileDetails?.base64}
        onClose={onClose}
        onImageChoose={setFileDetails}
        // Quick fix for typing error -- never mind this block
        // isActive={false}
        // currentStep={0}
        // totalSteps={0}
        // firstStep={function (): void {}}
        // lastStep={function (): void {}}
        // nextStep={function (): void {}}
        // previousStep={function (): void {}}
        // goToStep={function (_step: number): void {}}
        // goToNamedStep={function (_step: string): void {}}
        // --------------------------------------------------------------------------------- //
      />
      <EditImage
        fileDetails={fileDetails}
        onRemove={onRemove}
        onClose={onClose}
        onEditEnd={onEditEnd}
      />
    </StepWrapper>
  );
};
