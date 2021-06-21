import { useTranslation } from "react-i18next";
import styled from "styled-components";

import React from "react";
import { Input, Select } from "antd";

const StyledDiv = styled.div`
  color: #0000d8;
`;
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Input />
      <Select options={[{ title: "3", value: "1" }]} />
      <StyledDiv>{t("This is Consumer")}</StyledDiv>
    </>
  );
}
