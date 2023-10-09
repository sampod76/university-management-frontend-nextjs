"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
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
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              // onChange={field.onChange} // প্রতিটা ইনপুটের ভ্যালু এর মাধ্যমে পাওয়া হয় কিন্তু এইখানে আমি সরাসরি এভাবে লিখলেও হবে আর যদি স্প্রেড অপারেটর  {...field} ব্যবহার করি তাহলে হবে
              {...field}
              name={name}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              {...field}
              name={name}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{color:"red"}}>
        {errorMessage}
      </small>
    </>
  );
};

export default FormInput;
