"use client";
import { Form, Input, Button } from "antd";
import Logo from "@/public/absi_logo_complete.png";
import Image from "next/image";
import classes from "./otpStyle.module.css";
import Frame from "@/components/RegLoginFrame";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OtpPage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(30);
  const [data, setData] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isDisabled) {
      const interval = setInterval(() => {
        setCount(count - 1);
        setData(`${Math.floor(count / 60)}:${count % 60} s To Resend`);
      }, 1000);
      //
      return () => clearInterval(interval);
    }
    setData("Resend");
  }, [isDisabled, count]);

  const handleClick = () => {
    if (!isDisabled) {
      setIsDisabled((prevState) => !prevState);
    }
    setTimeout(() => {
      setIsDisabled(false);
      setCount(count + 30);
    }, count * 1000);
  };

  const onFinish = (values: any) => {
    console.log(values);
    const optcode = [];
    for (let value of Object.values(values)) {
      optcode.push(value);
    }
    console.log(optcode);

    const collapsedList: any = optcode.reduce((acc: any, item: any) => {
      return acc + item;
    }, "");
    console.log(collapsedList);
    localStorage.setItem("otp", collapsedList);
    router.push("/reg-sign/forgetPassword/resetPassword");
  };

  return (
    <div className={classes.body}>
      <Frame>
        <Link className={classes.back} href="/reg-sign/signin">
          <ArrowLeftOutlined />
          Back
        </Link>
        <p
          className={classes.p1}
        >{`We've sent an OTP to your mail for Verification`}</p>
        <p className={classes.p2}>Please Enter The OTP</p>
        <Form onFinish={onFinish} className={classes.form} name="otp">
          <Form.Item className={classes.formfieldotp}>
            <Form.Item
              className={classes.formfield}
              name="otpCode1"
              rules={[
                {
                  required: true,
                  message: "Please Enter The OTP Sent To Your Mobile Number",
                },
              ]}
            >
              <Input className={classes.input} />
            </Form.Item>
            <Form.Item
              className={classes.formfield}
              name="otpCode2"
              rules={[
                {
                  required: true,
                  message: "Please Enter The OTP Sent To Your Mobile Number",
                },
              ]}
            >
              <Input className={classes.input} />
            </Form.Item>
            <Form.Item
              className={classes.formfield}
              name="otpCode3"
              rules={[
                {
                  required: true,
                  message: "Please Enter The OTP Sent To Your Mobile Number",
                },
              ]}
            >
              <Input className={classes.input} />
            </Form.Item>
            <Form.Item
              className={classes.formfield}
              name="otpCode4"
              rules={[
                {
                  required: true,
                  message: "Please Enter The OTP Sent To Your Mobile Number",
                },
              ]}
            >
              <Input className={classes.input} />
            </Form.Item>
          </Form.Item>
          <Form.Item className={classes.formfield}>
            <Button className={classes.button} htmlType="submit">
              Confirm
            </Button>
          </Form.Item>
          <Form.Item className={classes.formfield}>
            <Button
              className={classes.button}
              disabled={isDisabled}
              onClick={handleClick}
            >
              {data}
            </Button>
          </Form.Item>
        </Form>
      </Frame>
    </div>
  );
}
