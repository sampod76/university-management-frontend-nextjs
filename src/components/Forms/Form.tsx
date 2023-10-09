"use client";

import { ReactElement, ReactNode } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,// is a type of function . that is a receives one parameter (data)
} from "react-hook-form";
type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?:any
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>; //function type --> SubmitHandler . data type--> any
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues,resolver }: FormProps) => {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;
  // formConfig.defaultValue=defaultValue

  const methods = useForm<FormProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const onFormDataSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onFormDataSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
