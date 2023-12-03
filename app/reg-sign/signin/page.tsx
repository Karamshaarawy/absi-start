"use client";
import { Form, Input, Button, Checkbox } from "antd";
import classes from "./style.module.css";
import Image from "next/image";
import fetchData from "@/requests/log-reg/Log-regFetch";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Frame from "@/components/RegLoginFrame";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import exclamcircle from "@/public/SVGs/exclamationcircle.svg";

export default function SigninPage() {
  const [response, setRespone] = useState<any>();
  const [error, SetError] = useState<any>(null);
  const router = useRouter();
  const path = "login";
  useEffect(() => {
    sessionStorage.setItem("email", response?.email);
    sessionStorage.setItem("id", response?.id);
    sessionStorage.setItem("isActive", response?.isActive);
    sessionStorage.setItem("lastActive", response?.lastActive);
    sessionStorage.setItem("name", response?.name);
    sessionStorage.setItem("profileImage", response?.profileImage);
    sessionStorage.setItem("refreshToken", response?.refreshToken);
    sessionStorage.setItem("token", response?.token);
    sessionStorage.setItem("userName", response?.email);
  }, [response]);
  const onFinish = async (values: any) => {
    console.log(values);
    const response = await fetchData(values, path);
    setRespone(response);
    console.log(response);

    if (response.token) {
      router.push("/");
    } else {
      SetError("The Email Or Password you entered is incorrect");
    }
  };

  return (
    <div className={classes.body}>
      <Frame>
        <Form
          name="signin"
          className={classes.form}
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please Enter Your E-mail",
              },
              {
                type: "email",
                message: "Please Enter a Valid E-mail",
              },
            ]}
            className={classes.formfield}
          >
            <Input
              prefix={<MailOutlined />}
              className={classes.input}
              placeholder="Enter Your E-mail"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "please Enter Your Password",
              },
            ]}
            className={classes.formfield}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter Your Password"
              className={classes.input}
            />
          </Form.Item>

          {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          {error && (
            <p className={classes.error}>
              <Image src={exclamcircle} alt="exclamation" />
              {error}
            </p>
          )}
          <Form.Item className={classes.formfield}>
            <Button className={classes.button} htmlType="submit">
              login
            </Button>
          </Form.Item>

          <div className={classes.forgetPassword}>
            <Link href="/reg-sign/forgetPassword">Forget Password?</Link>
          </div>
        </Form>
        <p className={classes.p}>
          {`Don't have an account? `}{" "}
          <Link className={classes.register} href="/reg-sign/register">
            Registeration
          </Link>
        </p>
      </Frame>
    </div>
  );
}
