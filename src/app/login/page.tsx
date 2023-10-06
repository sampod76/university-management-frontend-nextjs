"use client";
import { Button, Col, Input, Row } from "antd";
import loginImage from "../../assets/login.png";
import Image from "next/image";
import Form from "@/components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Form/FormInput";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const [userLogin, { isLoading, reset, data, error }] = useUserLoginMutation();
  const router=useRouter()
  
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.success) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push('/profile')
      } else {
        console.error(res?.message);
      }
    } catch (error) {
      console.error("🚀 ~ file: page.tsx:16 ~ LoginPage ~ error:", error);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col
        sm={12}
        md={8}
        lg={8}
        style={{
          border: "5px",
          borderRadius: "2rem",
          borderColor: "black",
          borderStyle: "solid",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                placeholder="Please provide your id"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
