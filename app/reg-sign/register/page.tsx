"use client";
import { Form, Input, Button } from "antd";
import Logo from "@/public/R.png";
import Image from "next/image";
import classes from "./style.module.css";
import {
  UserOutlined,
  MailOutlined,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import fetchData from "@/fetchData";

export default function RegisterPage() {
  const router = useRouter();
  const path = "register";
  const onFinish = async (values: any) => {
    console.log(values);
    const response = await fetchData(values, path);
    if (response.statusCode === 200) {
      router.push("/");
    }
    console.log(response);
  };

  return (
    <>
      <div className={classes.div}>
        <Image className={classes.image} src={Logo} alt="logo" />
      </div>

      <Form name="signUp" className={classes.form} onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please Enter Your name" }]}
          className={classes.formfield}
        >
          <Input
            className={classes.input}
            prefix={<UserOutlined className={classes.icons} />}
            placeholder="Enter Your Name"
          />
        </Form.Item>

        <Form.Item
          name="userName"
          className={classes.formfield}
          rules={[
            { required: true, message: "Please Enter Your username" },
            { type: "string", message: "message" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!/\s/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("the username sholdn't have spaces")
                );
              },
            }),
            {
              min: 6,
              message: "user name must have at least 6 characters",
            },
            {
              max: 16,
              message: "user name must have at most 16 characters",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className={classes.icons} />}
            placeholder="Enter Your username"
            className={classes.input}
          />
        </Form.Item>

        <Form.Item
          name="email"
          className={classes.formfield}
          rules={[
            { required: true, message: "Please Enter Your E-mai" },
            { type: "email", message: "Please Enter A valid E-mail" },
          ]}
        >
          <Input
            prefix={<MailOutlined className={classes.icons} />}
            placeholder="Enter Your E-mail"
            className={classes.input}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please Enter Your password" },
            { min: 8, message: "" },
            { max: 64, message: "" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    value
                  )
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "The password should be of at least 8 cahracters and max. 64 character with at leaste 1 number, 1symbol, 1lowercase letter and 1 uppercase letter"
                  )
                );
              },
            }),
          ]}
          className={classes.formfield}
        >
          <Input.Password
            prefix={<LockOutlined className={classes.icons} />}
            placeholder="Enter Your Password"
            type="password"
            className={classes.input}
          />
        </Form.Item>
        <Form.Item className={classes.formfield}>
          <Button type="primary" htmlType="submit" className={classes.button}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
