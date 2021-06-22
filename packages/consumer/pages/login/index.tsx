import { useForm } from "react-hook-form";
import { Input } from "@project/shared";
import { Button } from "antd";

export default function Login() {
  const { handleSubmit, control } = useForm();
  const onSubmit = () => {
    // console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="username" />
      <Input control={control} name="password" type="password" />
      <Button htmlType="submit">Submit</Button>
    </form>
  );
}
