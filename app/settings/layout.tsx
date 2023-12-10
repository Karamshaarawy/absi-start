"use client";
import { Form, Input, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";
import classes from "./homeStyle.module.css";
import Settings from "@/public/SVGs/setting.svg";
import Logout from "@/public/SVGs/logout.svg";
import Head from "next/head";
import editprofile from "@/public/SVGs/editprofile.svg";
import changePassword from "@/public/SVGs/lock.svg";
import language from "@/public/SVGs/language'.svg";
import help from "@/public/SVGs/help.svg";
import leftArrow from "@/public/SVGs/baclblack.svg";
import notification from "@/public/SVGs/notification.svg";

const { Header, Content, Sider } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title> create un encrypted files</title>
      </Head>
      <body className={inter.className}>
        <Layout style={{ display: "flex", flexDirection: "row" }}>
          <Layout style={{ maxWidth: "297px" }}>
            <Sider
              width={297}
              style={{ minHeight: "100vh", background: "white" }}
              className={classes.sider}
            >
              <Menu
                theme="light"
                mode="inline"
                items={[
                  {
                    key: "1",
                    icon: (
                      <Image
                        style={{ fill: "black" }}
                        src={leftArrow}
                        alt="back to home"
                      />
                    ),
                    label: <Link href="/Home"> Back to Home</Link>,
                  },
                ]}
              />
              <Menu
                theme="light"
                mode="inline"
                items={[
                  {
                    key: "1",
                    icon: <Image src={editprofile} alt="edit profile" />,
                    label: (
                      <Link href="/settings/editProfile"> Edit Profile</Link>
                    ),
                  },
                  {
                    key: "2",
                    icon: <Image src={changePassword} alt="change password" />,
                    label: (
                      <Link href="/settings/changePassword">
                        Change Password
                      </Link>
                    ),
                  },
                  {
                    key: "3",
                    icon: <Image src={language} alt="language" />,
                    label: <Link href="/settings/language"> Language</Link>,
                  },
                  {
                    key: "4",
                    icon: <Image src={help} alt="help" />,
                    label: (
                      <Link href="/settings/helpAndFAQs"> Help & FAQs</Link>
                    ),
                  },
                ]}
              />
              <Menu
                theme="light"
                mode="inline"
                items={[
                  {
                    key: "2",
                    icon: <Image src={Logout} alt="logout" />,
                    label: <Link href="/"> Logout</Link>,
                  },
                ]}
              />
            </Sider>
          </Layout>
          <Layout>
            <div id="modal-container" className={classes.modalContainer}>
              <Content className={classes.content}>
                <div className={classes.notification}>
                  <Form>
                    <Form.Item>
                      <Input placeholder="Search" />
                    </Form.Item>
                  </Form>
                  <Image src={notification} alt="notification" />
                </div>
                {children}
              </Content>
            </div>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
