"use client";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormInstance,
  Input,
  Upload,
} from "antd";
import Image from "next/image";
import classes from "./page.module.css";
import addImage from "@/public/SVGs/addImage.svg";
import plus from "@/public/SVGs/plus.svg";
import addfile from "@/public/SVGs/addfile.svg";
import back from "@/public/SVGs/baclblack.svg";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

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

export default function CreateImage(props: any) {
  const [counter, setCounter] = useState(3);
  const [showCounter, setShowCounter] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();
  const [formEnabled, setFormEnabled] = useState(false);

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

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
                <Image src={addImage} alt="" />
                <Image src={plus} alt="" className={classes.plus} />
              </div>

              <p className={classes.text}>Add or drag Images here </p>
              <hr style={{ alignSelf: "stretch" }} />
              <p className={classes.text2}>
                1- Add or Drag your Image . <br /> 2- Choose Expiry Date and
                Check if you need the image “View Only” <br />
                3- Enter file name then press
                <span className={classes.createabsi}> Create Absi</span>
              </p>
            </>
          )}
          {formEnabled && (
            <Form.Item>
              <Form.Item
                name="file"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger
                  name="files"
                  action="/upload.do"
                  style={{
                    background: "transparent",
                    width: "290.13px",
                    height: "171.729px",
                    flexShrink: "0",
                    borderRadius: "16px",
                    border: "4px solid #E1EAF0",
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <Image src={addfile} alt="" />
                    <Image src={plus} alt="" className={classes.plus2} />
                  </p>
                  <p className="ant-upload-text">Add or drag Images here</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          )}
        </div>
        <div>
          <div>
            <div>
              <Form.Item name="viewOnly" valuePropName="checked">
                <Checkbox defaultChecked>View Only</Checkbox>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="expireDate"
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
