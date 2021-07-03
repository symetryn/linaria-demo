import { useForm } from "react-hook-form";
import { styled } from "linaria/react";

import { Input, Button } from "@project/shared";
const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  const { handleSubmit, control } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
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
        <Button htmlType="submit" padding="0.1rem 0.8rem" color="#fff">
          Submit
        </Button>
      </Form>
    </FormWrapper>
  );
}
