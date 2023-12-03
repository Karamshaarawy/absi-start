"use client";
import { Button, Checkbox, DatePicker, Form, FormInstance, Input } from "antd";
import Image from "next/image";
import classes from "./page.module.css";
import audio from "@/public/SVGs/audio.svg";
import back from "@/public/SVGs/baclblack.svg";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

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

export default function CreateAudio(props: any) {
  const [counter, setCounter] = useState(3);
  const [showCounter, setShowCounter] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();
  const [formEnabled, setFormEnabled] = useState(false);
  if (showCounter) {
    let intervalId = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter === 0) {
      clearInterval(intervalId);
      setShowCounter(false);
      setShowRecord(true);
    }
  }
  const click = () => {
    setFormEnabled(true);
    setShowCounter(true);
  };

  const backHandle = () => {
    if (formEnabled) {
      setFormEnabled(false);
    } else {
      router.push("./");
    }
  };

  return (
    <Form disabled={!formEnabled} form={form} name="validateOnly">
      <div className={classes.page}>
        <div onClick={backHandle} className={classes.back}>
          <Image alt="lkjh" src={back} />
          back
        </div>

        <div className={classes.frame}>
          {!formEnabled && (
            <>
              <div onClick={click} className={classes.frame2}>
                <Image src={audio} alt="" />
              </div>

              <p className={classes.text}>Click here to start record </p>
              <hr style={{ alignSelf: "stretch" }} />
              <p className={classes.text2}>
                1- Start recording your audio. <br /> 2- Choose Expiry Date and
                Check if you need the audio “View Only” <br />
                3- Enter file name then press
                <span className={classes.createabsi}> Create Absi</span>
              </p>
            </>
          )}
          {showCounter && <p className={classes.counter}>{counter}</p>}
          {showRecord && <p>show recorder</p>}
        </div>
        <div>
          <div>
            <div>
              <Form.Item name="viewOnly" valuePropName="checked">
                <Checkbox defaultChecked>View Only</Checkbox>
              </Form.Item>{" "}
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
          <div>
            <Form.Item
              name="fileName"
              rules={[
                { required: true, message: "please enter the file name" },
              ]}
            >
              <Input placeholder="Enter File Name" />
            </Form.Item>
            <Form.Item>
              <SubmitButton form={form} />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}
