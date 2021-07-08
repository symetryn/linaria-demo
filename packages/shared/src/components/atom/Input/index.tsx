import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input } from "antd";
import React from "react";

interface InputProps {
  name: string;
  type?: string;
  control: Control;
  defaultValue?: string;
  rules?: RegisterOptions;
}

export const InputComponent: React.FC<InputProps> = ({
  name,
  type,
  control,
  defaultValue,
  rules,
}) => {
  return (
    <Controller
      // convert to constant literal instead of string
      name={`${name}` as const}
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
          </div>
        );
      }}
    />
  );
};
