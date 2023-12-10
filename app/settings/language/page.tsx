"use client";
import SettingFrame from "@/components/settingFrame";
import { Button, Form } from "antd";
import classes from "./languageStyle.module.css";
import Image from "next/image";
import share from "@/public/SVGs/share.svg";

export default function Language() {
  return (
    <SettingFrame>
      <Form className={classes.form}>
        <Form.Item>
          <Button className={classes.buttonarabic}>Arabic</Button>
        </Form.Item>
        <Form.Item>
          <Button className={classes.buttonenglish}>English</Button>
        </Form.Item>
        <p className={classes.share}>
          Tell your friend about ABSi <Image src={share} alt="share" />
        </p>
        <div className={classes.buttons}>
          <Form.Item className={classes.buttonwhite}>
            <Button>Cancel</Button>
          </Form.Item>
          <Form.Item className={classes.button}>
            <Button>Save</Button>
          </Form.Item>
        </div>
      </Form>
    </SettingFrame>
  );
}
