import { Control, Controller } from "react-hook-form";
import { Input } from "antd";

interface InputProps {
  name: string;
  type?: string;
  control: Control;
}

export const InputComponent: React.FC<InputProps> = ({
  name,
  type,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input type={type} {...field}></Input>}
    />
  );
};
