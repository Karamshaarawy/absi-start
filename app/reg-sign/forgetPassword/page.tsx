"use client";
import {
  ArrowRightOutlined,
  MailOutlined,
  RightCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
import classes from "./forgetPasswordStyle.module.css";
import Frame from "@/components/RegLoginFrame";
import Link from "next/link";
import fetchData from "@/requests/ForgetPassword/RequestResetPasswordFetch";
import { useState } from "react";

export default function ForgetPassword() {
  const [response, setRespone] = useState<any>();
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log(values);
    const response = await fetchData(values);
    setRespone(response);
    if (response.success) {
      router.push("./forgetPassword/otp");
    } else {
      setError(response.message);
    }
    console.log(response);
    localStorage.setItem("email", values.email);
  };

  return (
    <div className={classes.body}>
      <Frame>
        <Link className={classes.back} href="/reg-sign/signin">
          <ArrowLeftOutlined />
          Back
        </Link>

        <Form onFinish={onFinish} className={classes.form}>
          <Form.Item
            className={classes.formfield}
            name="email"
            rules={[
              { required: true, message: "Please Enter Your E-mail" },
              {
                type: "email",
                message: "Please Enter a Valid E-mail",
              },
            ]}
          >
            <Input
              className={classes.input}
              prefix={<MailOutlined />}
              placeholder="Your Email"
            />
          </Form.Item>
          {error && <p className={classes.p}>{error}</p>}
          <Form.Item className={classes.formfield}>
            <Button className={classes.button} htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Frame>
    </div>
  );
}
