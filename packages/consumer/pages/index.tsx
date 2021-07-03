import { useTranslation } from "react-i18next";
import { styled } from "linaria/react";

import React from "react";

const StyledDiv = styled.div`
  color: #0000d8;
`;
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <StyledDiv>{t("This is Consumer")}</StyledDiv>
    </>
  );
}
