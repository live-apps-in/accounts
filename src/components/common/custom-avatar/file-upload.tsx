import { Dismiss24Filled, ChevronRight24Filled } from "@fluentui/react-icons";
import { CustomCard, JustifyBetween, CustomButton } from "src/components";
import { MouseEventHandler, useState } from "react";
import { IMAGE_DETAILS } from ".";
import { FileInput } from "src/components/common/recursive-container/components/file-input";
import { StepWizardChildProps } from "react-step-wizard";
import styled from "styled-components";
import { Dialog, DialogBody, DialogSurface } from "@fluentui/react-components/unstable";

const StepContentWrapper = styled(({ children, ...props }: any) => (
  <Dialog {...props} open aria-label="modal">
    <DialogSurface aria-label="modal">
      <DialogBody>{children}</DialogBody>
    </DialogSurface>
  </Dialog>
))(`
  overflow: auto;
`);

const FileUploadWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface FILE_UPLOAD_PROPS {
  onClose: MouseEventHandler;
  onImageChoose: (details: IMAGE_DETAILS) => any;
  value?: string | null;
}

export const FileUpload: React.FC<FILE_UPLOAD_PROPS & any> = (props) => {
  const { onClose, onImageChoose, value } = props;

  const withStepWizardProps: FILE_UPLOAD_PROPS & StepWizardChildProps = props;

  const [fileDetails, setFileDetails] = useState<IMAGE_DETAILS>({
    base64: null,
    base64WithoutPrefix: null,
    file: null,
    extention: null,
  });

  return (
    <StepContentWrapper>
      <FileUploadWrapper>
        <JustifyBetween>
          {value || fileDetails?.base64 ? (
            <CustomButton
              appearance="outline"
              color="secondary"
              icon={<ChevronRight24Filled />}
              iconPosition='after'
              onClick={withStepWizardProps.nextStep}
            >
              Continue Editing
            </CustomButton>
          ) : (
            <div />
          )}
          <CustomButton onClick={onClose} color="error" icon={<Dismiss24Filled />} />
        </JustifyBetween>
        <CustomCard>
          <FileInput
            style={{ minHeight: 50, minWidth: 200 }}
            returnCompleteFileDetails
            value={fileDetails?.base64}
            onChange={(details: any) => {
              setFileDetails(details);
              onImageChoose(details);
              withStepWizardProps.nextStep();
            }}
          />
        </CustomCard>
      </FileUploadWrapper>
    </StepContentWrapper>
  );
};
