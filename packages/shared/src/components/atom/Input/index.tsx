import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input as AntInput, Button as AntButton } from "antd";
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
  background-color: green;
`;

const Button = styled(AntButton)`
  background-color: green;
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
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        // recommended way to extract field state https://react-hook-form.com/api/useform/formstate
        const { error } = fieldState;
        return (
          <div>
            <Input type={type} {...field}></Input>
            {error?.message}
            <Button>test</Button>
          </div>
        );
      }}
    />
  );
};
