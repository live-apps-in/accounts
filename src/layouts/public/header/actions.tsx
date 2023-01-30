import { FlexRow } from "src/components";

export const Actions: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => <FlexRow style={{ alignItems: "center", gap: 10 }}>{children}</FlexRow>;
