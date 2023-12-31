"use client";
import { Form, Input, Button, Space } from "antd";
import Image from "next/image";
import classes from "./otpStyle.module.css";
import Frame from "@/components/RegLoginFrame";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FetchData from "@/requests/log-reg/reg-otp";
import exclam from "@/public/SVGs/exclamationcircle.svg";
import resendOtp from "@/requests/log-reg/resendOtp";

export default function OtpPage() {
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(60);
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

  const resendOtpClickHandler = async () => {
    if (!isDisabled) {
      setIsDisabled((prevState) => !prevState);
    }
    setTimeout(() => {
      setIsDisabled(false);
      setCount(count + 60);
    }, count * 1000);

    const regEmail = localStorage.getItem("reg-email");

    const resendEmailResponse = await resendOtp(regEmail);
    if (resendEmailResponse.error) {
      setError(resendEmailResponse.message);
    } else {
      for (let key in resendEmailResponse) {
        console.log(resendEmailResponse[key]);
        localStorage.setItem(`otp-${key}`, resendEmailResponse[key]);
      }
    }
    console.log(resendEmailResponse);
  };

  const onFinish = async (values: any) => {
    const x = values.otp;
    const otp = `${x[1]}${x[2]}${x[3]}${x[4]}`;

    console.log(otp);

    const token = localStorage.getItem("reg-token");
    const response = await FetchData(otp, token);
    console.log(response);

    if (response.error) {
      setError(response.message);
    } else {
      for (let key in response) {
        console.log(response[key]);
        localStorage.setItem(`reg-${key}`, response[key]);
      }
      router.push("/Home");
    }
  };

  return (
    <div className={classes.body}>
      <Frame>
        <Link className={classes.back} href="/reg-sign/register">
          <ArrowLeftOutlined />
          Back
        </Link>
        <p
          className={classes.p1}
        >{`We've sent an OTP to your mail for Verification`}</p>
        <p className={classes.p2}>Please Enter The OTP</p>
        <Form onFinish={onFinish} className={classes.form}>
          <Form.Item className={classes.formfieldotp}>
            <Space.Compact>
              <Form.Item
                className={classes.formfield}
                name={["otp", "1"]}
                rules={[
                  {
                    required: true,
                    message: "Please Enter The OTP Sent To Your Mobile Number",
                  },
                ]}
              >
                <Input maxLength={1} className={classes.input} />
              </Form.Item>
              <Form.Item
                className={classes.formfield}
                name={["otp", "2"]}
                rules={[
                  {
                    required: true,
                    message: "Please Enter The OTP Sent To Your Mobile Number",
                  },
                ]}
              >
                <Input maxLength={1} className={classes.input} />
              </Form.Item>
              <Form.Item
                className={classes.formfield}
                name={["otp", "3"]}
                rules={[
                  {
                    required: true,
                    message: "Please Enter The OTP Sent To Your Mobile Number",
                  },
                ]}
              >
                <Input maxLength={1} className={classes.input} />
              </Form.Item>
              <Form.Item
                className={classes.formfield}
                name={["otp", "4"]}
                rules={[
                  {
                    required: true,
                    message: "Please Enter The OTP Sent To Your Mobile Number",
                  },
                ]}
              >
                <Input maxLength={1} className={classes.input} />
              </Form.Item>
            </Space.Compact>
          </Form.Item>
          {error && (
            <p>
              <Image src={exclam} alt="" />
              {error}
            </p>
          )}
          <Form.Item className={classes.formfield}>
            <Button className={classes.button} htmlType="submit">
              Confirm
            </Button>
          </Form.Item>
          <Form.Item className={classes.formfield}>
            <Button
              className={classes.button}
              disabled={isDisabled}
              onClick={resendOtpClickHandler}
            >
              {data}
            </Button>
          </Form.Item>
        </Form>
      </Frame>
    </div>
  );
}
