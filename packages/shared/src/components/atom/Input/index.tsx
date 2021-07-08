import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input as AntInput } from "antd";
import { styled } from "linaria/react";
import React from "react";

interface InputProps {
  name: string;
  type?: string;
  control: Control;
  defaultValue?: string;
  rules?: RegisterOptions;
}

const Input = styled(AntInput)`
  display: block;
  padding: 0.2rem;
`;
const Error = styled.div`
  display: block;
  padding: 0.2rem;
`;
const Wrapper = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const InputComponent: React.FC<InputProps> = ({
  name,
  type,
  control,
  defaultValue,
  rules,
}) => {
  return (
    <Controller
      name={`${name}` as const}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        // recommended way to extract field state https://react-hook-form.com/api/useform/formstate
        const { error } = fieldState;
        return (
          <Wrapper>
            <Input type={type} {...field}></Input>
            <Error>{error?.message}</Error>
          </Wrapper>
        );
      }}
    />
  );
};
