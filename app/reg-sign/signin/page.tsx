"use client";
import { Form, Input, Button } from "antd";
import Logo from "@/public/R.png";
import classes from "./style.module.css";
import Image from "next/image";
import fetchData from "@/fetchData";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const path = "login";
  const onFinish = async (values: any) => {
    const response = await fetchData(values, path);

    if (response.statusCode === 200) {
      router.push("/");
    }
  };

  return (
    <>
      <div className={classes.div}>
        <Image className={classes.image} src={Logo} alt="Logo" />
      </div>
      <Form name="signin" className={classes.form} onFinish={onFinish}>
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
          <Input className={classes.input} placeholder="Enter Your E-mail" />
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
            placeholder="Enter Your Password"
            className={classes.input}
          />
        </Form.Item>

        <Form.Item className={classes.formfield}>
          <Button type="primary" className={classes.button} htmlType="submit">
            login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
