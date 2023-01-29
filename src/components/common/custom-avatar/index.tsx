import { AvatarProps } from "@fluentui/react-components";
import { Edit24Filled } from "@fluentui/react-icons";
import { CustomButton } from "src/components";
import { useState } from "react";
import { ImageEditorPopup } from "./image-editor-popup";
import { DefaultAvatar } from "src/assets";
import clsx from "clsx";
import styled from "styled-components";

const AvatarWrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin-top: 2px;
  margin-bottom: 2px;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.115);
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

export interface IMAGE_DETAILS {
  base64: string | null;
  base64WithoutPrefix: string | null;
  file: File | null;
  extention: string | null;
}

interface CUSTOM_AVATAR_PROPS {
  src?: AvatarProps["image"]["src"];
  isEditable?: boolean;
  loading?: boolean;
  onEditEnd?: (details: IMAGE_DETAILS) => any;
  onRemove?: Function;
  value?: string | null;
  alt?: string;
  imageContainerProps?: React.ComponentProps<"div">;
  className?: string;
}

const AvatarImage = styled("div")`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  img,
  > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CustomAvatar: React.FC<CUSTOM_AVATAR_PROPS> = ({
  isEditable = true,
  onEditEnd,
  onRemove,
  value,
  alt,
  loading,
  ...rest
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => setIsEditMode(true);
  const handleClose = () => setIsEditMode(false);

  return (
    <>
      <AvatarWrapper {...rest}>
        <AvatarImage
          {...rest.imageContainerProps}
          className={clsx({
            [rest.className]: !!rest.className,
            "avatar-image": true,
          })}
        >
          <div className={loading ? "skeleton-box" : undefined}>
            {!loading && (
              <img src={value || DefaultAvatar} alt={alt || "avatar"} />
            )}
          </div>
        </AvatarImage>
        {isEditable && (
          <div className="overlay">
            <CustomButton icon={<Edit24Filled />} onClick={handleEditClick} />
          </div>
        )}
      </AvatarWrapper>
      {isEditMode && (
        <ImageEditorPopup
          onEditEnd={onEditEnd}
          onRemove={onRemove}
          value={value}
          onClose={handleClose}
        />
      )}
    </>
  );
};
