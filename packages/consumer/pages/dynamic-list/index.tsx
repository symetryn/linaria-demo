import { Space, Button } from "antd";
import React from "react";
import { Input } from "@project/shared";
import { useFieldArray, useForm } from "react-hook-form";

interface Item {
  id: string;
  name: string;
}

const DynamicList = () => {
  const { control } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: "test" });
  return (
    <Space direction="vertical">
      {fields.map((field: Item, index: number) => (
        <Space direction="horizontal" key={field.id}>
          <Input
            control={control}
            key={field.id}
            name={`test.${index}.name`}
            defaultValue={field.name}
          />
          <Button onClick={() => remove(index)}>Delete</Button>
        </Space>
      ))}
      <Button onClick={() => append({ name: "" })}>Add</Button>
    </Space>
  );
};

export default DynamicList;
