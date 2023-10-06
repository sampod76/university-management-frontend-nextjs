"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: string;
  label?: string;
}
const FormInput = ({
  name,
  type,
  id,
  placeholder,
  size,
  value,
  label,
  validation,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          type === "password" ? <Input.Password
          {...field}
          name={name}
          size={size}
          placeholder={placeholder}
          value={value ? value : field.value}
        /> :<Input
        {...field}
        name={name}
        size={size}
        placeholder={placeholder}
        value={value ? value : field.value}
      />
        )}
      />
    </>
  );
};

export default FormInput;
