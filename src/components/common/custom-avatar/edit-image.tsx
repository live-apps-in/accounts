import { useState } from "react";
import {
  Divider,
} from "@fluentui/react-components";
import { Dismiss24Filled } from "@fluentui/react-icons";
import AvatarEditor from "react-avatar-editor";
import {
  CustomButton,
  FlexRow,
  RecursiveContainer,
  JustifyBetween,
  CustomText
} from "src/components";
import { useRef } from "react";
import { useEffect } from "react";
import { getError, imageUrlToBase64 } from "src/utils";
import { CONFIG_TYPE } from "src/components";
import { useFormik } from "formik";
import { CardSpinner } from "../../app-specific/card-spinner";
import styled from "styled-components";
import { Dialog, DialogBody, DialogSurface } from "@fluentui/react-components/unstable";
import { DefaultAvatar } from "src/assets";

const StepContentWrapper = styled(({ children, ...props }: any) => (
  <Dialog {...props} open aria-label="modal">
    <DialogSurface>
      <DialogBody aria-label="modal">{children}</DialogBody>
    </DialogSurface>
  </Dialog>
))(`
  overflow: auto;
`);

export const EditImage = ({
  fileDetails = null,
  previousStep = (details?: any) => {},
  onEditEnd = (details?: any) => {},
  onRemove = (details?: any) => {},
  onClose = () => {},
}) => {
  const [processing, setProcessing] = useState(false);
  const [processedFileDetials, setProcessedFileDetails] = useState(null);
  const [processingEdit, setProcessingEdit] = useState(false);
  const [processingRemove, setProcessingRemove] = useState(false);

  useEffect(() => {
    (async () => {
      // to avoid tainted canvas error, convert image url to base64 format
      if (
        fileDetails &&
        fileDetails.base64 &&
        fileDetails.base64.startsWith("http")
      ) {
        setProcessing(true);
        try {
          const base64WithoutPrefix = await imageUrlToBase64(
            fileDetails.base64
          );
          const base64 = `data:image/png;base64,${base64WithoutPrefix}`;
          setProcessedFileDetails({
            ...fileDetails,
            base64,
            base64WithoutPrefix,
          });
          setProcessing(false);
        } catch (err) {
          window.flash({ message: getError(err).message, variant: "error" });
          setProcessing(false);
          close();
        }
      } else setProcessedFileDetails(fileDetails || null);
    })();
    return () => {};
  }, [fileDetails]);

  const imageRef = useRef<AvatarEditor>();

  const handleSubmit = async () => {
    setProcessingEdit(true);
    try {
      let finalImage = null;
      try {
        if (imageRef.current && processedFileDetials?.base64)
          finalImage = imageRef.current.getImageScaledToCanvas().toDataURL();
      } catch {
        /* ignore error */
      }
      let returnData = {
        ...fileDetails,
        base64: finalImage,
        base64WithoutPrefix: finalImage,
      };
      if (onEditEnd) await onEditEnd(returnData);
      onClose();
    } catch (err) {
      /* ignore error */
    }
    setProcessingRemove(false);
  };

  const handleRemove = async () => {
    setProcessingRemove(true);
    await onRemove();
    setProcessingRemove(false);
  };

  const formik = useFormik({
    initialValues: {
      scale: 1.2,
      rotate: 0,
    },
    onSubmit: () => {},
  });

  const settingsFields: CONFIG_TYPE = [
    {
      name: "scale",
      type: "slider",
      min: 1,
      max: 5,
      step: 0.3,
      label: "Zoom",
    },
    {
      name: "rotate",
      type: "slider",
      min: 0,
      max: 360,
      step: 10,
      label: "Rotate",
    },
  ];

  return (
    <StepContentWrapper open>
        <JustifyBetween 
          // align="center"
        style={{ marginBottom: 1 }}
        >
          <CustomText as="h4">Edit Image</CustomText>
          <CustomButton onClick={onClose} color="error" icon={<Dismiss24Filled />} />
        </JustifyBetween>
        {processing ? (
          <div style={{ width: 200 }}>
            <CardSpinner />
          </div>
        ) : (
          <>
            <AvatarEditor
              ref={imageRef}
              image={processedFileDetials?.base64 || DefaultAvatar}
              width={150}
              height={150}
              border={30}
              borderRadius={100}
              color={[57, 57, 57, 0.388]} // RGBA
              disableDrop
              {...formik.values}
            />
            <CustomText style={{ marginTop: 1, marginBottom: 1 }} as="h5">
              Options
            </CustomText>
            <Divider />
            <form onSubmit={formik.handleSubmit}>
              <RecursiveContainer config={settingsFields} formik={formik} />
                <FlexRow style={{ flexWrap: "wrap" }}>
                  <CustomButton
                    appearance="subtle"
                    onClick={handleSubmit}
                    loading={processingEdit}
                  >
                    Done
                  </CustomButton>
                  <CustomButton
                    onClick={() => previousStep()}
                    appearance="secondary"
                  >
                    Change Image
                  </CustomButton>
                  {fileDetails?.base64 && <CustomButton
                    onClick={handleRemove}
                    type="button"
                    loading={processingRemove}
                  >
                    Remove Image
                  </CustomButton>}
                </FlexRow>
            </form>
          </>
        )}
    </StepContentWrapper>
  );
};
