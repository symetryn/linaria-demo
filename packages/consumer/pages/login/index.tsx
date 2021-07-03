import { useForm } from "react-hook-form";
import { styled } from "linaria/react";
import { Button as AntButton } from "antd";

import { Input, Button } from "@project/shared";
const Comp = styled(AntButton)`
  height: 100px;
  width: 100px;
  background-color: black;
`;

export default function Login() {
  const { handleSubmit, control } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Comp>test</Comp>
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
      <Button htmlType="submit" color="#eee" padding="2rem">
        Submit
      </Button>
    </form>
  );
}
