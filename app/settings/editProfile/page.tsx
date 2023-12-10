"use client";
import { Form, Input, Button } from "antd";
import Image from "next/image";
import classes from "./editProfileStyle.module.css";
import user from "@/public/SVGs/user.svg";
import mail from "@/public/SVGs/sms.svg";
import share from "@/public/SVGs/share.svg";
import SettingFrame from "@/components/settingFrame";

export default function EditProfile() {
  return (
    <SettingFrame>
      <Form className={classes.form}>
        <div className={classes.photoframe}></div>
        <Form.Item className={classes.input}>
          <Input
            prefix={<Image src={user} alt="user" />}
            placeholder="Enter Your Name"
          />
        </Form.Item>
        <Form.Item className={classes.input}>
          <Input
            prefix={<Image src={mail} alt="user" />}
            placeholder="Your E-mail"
          />
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
