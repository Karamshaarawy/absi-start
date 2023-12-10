"use client";
import { Button, Checkbox, DatePicker, Form, FormInstance, Input } from "antd";
import Image from "next/image";
import classes from "./page.module.css";
import text from "@/public/SVGs/text.svg";
import back from "@/public/SVGs/baclblack.svg";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button htmlType="submit" disabled={!submittable}>
      Create Absi
    </Button>
  );
};

export default function CreateText(props: any) {
  const router = useRouter();
  const [form] = Form.useForm();
  const [formEnabled, setFormEnabled] = useState(false);

  const { TextArea } = Input;

  const click = () => {
    setFormEnabled(true);
  };

  const backHandle = () => {
    if (formEnabled) {
      setFormEnabled(false);
    } else {
      router.push("./");
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      disabled={!formEnabled}
      form={form}
      name="validateOnly"
      onFinish={onFinish}
    >
      <div className={classes.page}>
        <div onClick={backHandle} className={classes.back}>
          <Image alt="lkjh" src={back} />
          back
        </div>

        <div className={classes.frame}>
          {!formEnabled && (
            <>
              <div onClick={click} className={classes.frame2}>
                <Image src={text} alt="" />
              </div>

              <p className={classes.text}>Click here your text message </p>
              <hr style={{ alignSelf: "stretch" }} />
              <p className={classes.text2}>
                1- Click Above and start typing your message <br /> 2- Choose
                Expiry Date and Check if you need the audio “View Only” <br />
                3- Enter file name then press
                <span className={classes.createabsi}> Create Absi</span>
              </p>
            </>
          )}
          {formEnabled && (
            <Form.Item
              className={classes.textarea}
              name="text"
              rules={[{ required: true, message: "please enter your message" }]}
            >
              <TextArea placeholder="Type Your Message..." />
            </Form.Item>
          )}
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <Form.Item name="viewOnly" valuePropName="checked">
                <Checkbox defaultChecked>View Only</Checkbox>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="expiryDate"
                label="Expiry Date"
                rules={[
                  { required: true, message: "please enter the expiry date" },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item
              className={classes.fileName}
              name="fileName"
              rules={[
                { required: true, message: "please enter the file name" },
              ]}
            >
              <Input placeholder="Enter File Name" />
            </Form.Item>
            <Form.Item className={classes.button}>
              <SubmitButton form={form} />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}
