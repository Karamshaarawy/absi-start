"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import classes from "./page.module.css";

const { Header, Content, Footer } = Layout;

const homePageHeaderItems: MenuProps["items"] = [
  {
    label: <Link href="/reg-sign/signin"> Signin</Link>,
    key: "signin1",
    icon: <UserOutlined />,
  },
  {
    label: <Link href="/reg-sign/register"> Register</Link>,
    key: "register",
    icon: <UserAddOutlined />,
  },
];

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu
      className={classes.menu}
      theme="light"
      mode="horizontal"
      items={homePageHeaderItems}
    />
  );
};

export default HomePage;
