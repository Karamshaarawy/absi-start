"use client";
import Frame from "@/components/RegLoginFrame";
import { Button, Form, Input } from "antd";
import Logo from "@/public/absi_logo_complete.png";
import Image from "next/image";
import classes from "./resetStyle.module.css";
import ConfirmResetPassword from "@/requests/ForgetPassword/ConfirmResetPassword";

export default function ResetPage() {
  const onFinish = async (values: any) => {
    values.email = localStorage.getItem("email");
    values.otp = localStorage.getItem("otp");
    console.log(values);
    const response = await ConfirmResetPassword(values);
    console.log(response);
  };

  return (
    <div className={classes.body}>
      <Frame>
        <Form className={classes.form} onFinish={onFinish}>
          <Form.Item
            className={classes.formfield}
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
          >
            <Input.Password
              className={classes.input}
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item
            className={classes.formfield}
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
          >
            <Input.Password
              className={classes.input}
              placeholder="Confirm New Password"
            />
          </Form.Item>
          <Form.Item className={classes.formfield}>
            <Button className={classes.button} htmlType="submit">
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </Frame>
    </div>
  );
}
