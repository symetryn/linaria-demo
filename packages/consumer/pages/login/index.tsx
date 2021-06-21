import { useForm } from "react-hook-form";
import { Input } from "@project/shared";
import React from "react";
import { Button } from "antd";

export default function Login() {
  const { handleSubmit, control } = useForm();
  const onSubmit = () => {
    // console.log(data)};
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="username" />
      <Input control={control} name="password" />
      <Button loading={true} htmlType="submit">
        Submit
      </Button>
    </form>
  );
}
