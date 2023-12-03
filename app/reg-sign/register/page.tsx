"use client";
import { Form, Input, Button } from "antd";
import classes from "./style.module.css";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import fetchData from "@/requests/log-reg/Log-regFetch";
import Frame from "@/components/RegLoginFrame";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import exclamcircle from "@/public/SVGs/exclamationcircle.svg";

export default function RegisterPage() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const path = "register";
  const onFinish = async (values: any) => {
    console.log(values);
    const response = await fetchData(values, path);
    if (response.token) {
      localStorage.setItem("reg-token", response.token);
      router.push("/reg-sign/register/otp");
    } else {
      setError(response.message);
    }
    console.log(response);
  };

  return (
    <div className={classes.body}>
      <Frame>
        <Form name="signUp" className={classes.form} onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please Enter Your name" }]}
            className={classes.formfield}
          >
            <Input
              className={classes.input}
              placeholder="Enter Your Name"
              prefix={<UserOutlined className={classes.icons} />}
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
              placeholder="Enter Your User Name"
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
              placeholder="Your Email"
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
              placeholder="Password"
              type="password"
              className={classes.input}
            />
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please Enter Your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The new password that you entered don not match!"
                    )
                  );
                },
              }),
            ]}
            className={classes.formfield}
          >
            <Input.Password
              prefix={<LockOutlined className={classes.icons} />}
              placeholder="Confirm Password"
              type="password"
              className={classes.input}
            />
          </Form.Item>

          {error && (
            <p className={classes.error}>
              <Image src={exclamcircle} alt="exclamation" />
              {error}
            </p>
          )}

          <Form.Item className={classes.formfield}>
            <Button htmlType="submit" className={classes.button}>
              Register
            </Button>
          </Form.Item>
          <p className={classes.p}>
            Already have an account?
            <Link className={classes.login} href="/reg-sign/signin">
              login
            </Link>
          </p>
        </Form>
      </Frame>
    </div>
  );
}
