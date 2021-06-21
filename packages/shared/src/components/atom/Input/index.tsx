import { Control, Controller } from "react-hook-form";
import { Input } from "antd";

interface InputProps {
  name: string;
  control: Control;
}

export const InputComponent: React.FC<InputProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input.Password color="red" {...field}></Input.Password>
      )}
    />
  );
};
