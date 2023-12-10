"use client";
import { Form, Input, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import classes from "./homeStyle.module.css";
import Home from "@/public/SVGs/teenyicons_home-outline.svg";
import Contacts from "@/public/SVGs/contacts.svg";
import Chats from "@/public/SVGs/chat.svg";
import Settings from "@/public/SVGs/setting.svg";
import Logout from "@/public/SVGs/logout.svg";
import Head from "next/head";
import notification from "@/public/SVGs/notification.svg";

const { Content, Sider } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
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
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <Image src={Home} alt="Home" />,
                    label: <Link href="/Home"> Home</Link>,
                  },
                  {
                    key: "2",
                    icon: <Image src={Contacts} alt="Contacts" />,
                    label: <Link href="/Home/contacts"> Contacts</Link>,
                  },
                  {
                    key: "3",
                    icon: <Image src={Chats} alt="chats" />,
                    label: <Link href="/Home/chats"> Chat</Link>,
                  },
                ]}
              />
              <Menu
                theme="light"
                mode="inline"
                items={[
                  {
                    key: "1",
                    icon: <Image src={Settings} alt="settings" />,
                    label: <Link href="/settings"> Settings</Link>,
                  },
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
