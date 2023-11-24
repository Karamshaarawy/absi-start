"use client";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const homePageHeaderItems: MenuProps["items"] = [
  {
    label: <Link href="/reg-sign"> signin</Link>,
    key: "signin",
    icon: <UserOutlined />,
  },
  { label: "register", key: "register", icon: <UserAddOutlined /> },
];

const App = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      style={{ alignSelf: "center", alignItems: "center" }}
      theme="light"
      mode="horizontal"
      items={homePageHeaderItems}
      onClick={onClick}
    />
  );
};

export default App;
