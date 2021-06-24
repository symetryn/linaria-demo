import { useForm } from "react-hook-form";
import { Input } from "@project/shared";
import { Button } from "antd";

export default function Login() {
  const { handleSubmit, control } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="username"
        rules={{ required: "required message" }}
      />
      <Input
        control={control}
        name="password"
        type="password"
        rules={{
          required: "required message",
          // explict value and message
          minLength: { value: 5, message: "Minimum 5" },
          pattern: { value: /[A-Za-z]/, message: "Text only" },
        }}
      />
      <Button htmlType="submit">Submit</Button>
    </form>
  );
}
