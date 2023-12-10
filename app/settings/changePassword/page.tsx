"use client";
import SettingFrame from "@/components/settingFrame";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import classes from "./changePasswordStyle.module.css";
import share from "@/public/SVGs/share.svg";
import lock from "@/public/SVGs/lock.svg";

export default function ChangePassword() {
  return (
    <SettingFrame>
      <Form className={classes.form}>
        <Form.Item className={classes.input}>
          <Input.Password
            prefix={<Image src={lock} alt="user" />}
            placeholder="Old Password"
          />
        </Form.Item>
        <Form.Item className={classes.input}>
          <Input.Password
            prefix={<Image src={lock} alt="user" />}
            placeholder="New Password"
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
            <Button>Change Password</Button>
          </Form.Item>
        </div>
      </Form>
    </SettingFrame>
  );
}
