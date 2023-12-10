"use client";
import { Button, Form, Input, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import share from "@/public/SVGs/share2.svg";
import { Inter } from "next/font/google";
import classes from "./homeStyle.module.css";
import Head from "next/head";
import editprofile from "@/public/SVGs/editprofile.svg";
import leftArrow from "@/public/SVGs/baclblack.svg";
import notification from "@/public/SVGs/notification.svg";
import InviteFriendButton from "@/components/InviteFriendButton";

const { Content, Sider } = Layout;

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
                    label: <Link href="/settings"> Back to Settings</Link>,
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
                    label: "Edit Profile",
                  },
                ]}
              />
              <Menu
                theme="light"
                mode="inline"
                items={[
                  {
                    key: "1",
                    label: <InviteFriendButton />,
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
