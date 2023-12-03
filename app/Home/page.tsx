"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";

import classes from "./homeStyle.module.css";
import Frame from "@/components/CreateFrame";
import Frame1 from "@/components/UnlockFrame";
import Modal from "@/components/Modal";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const modalHandle = () => {
    setShowModal(true);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Layout
        style={{
          display: "flex",
          alignItems: "center",
          background: "transparent",
          width: "100%",
        }}
      >
        <div id="modal-container" className={classes.modalContainer}>
          <div onClick={modalHandle}>
            <Frame></Frame>
          </div>
          {showModal && <Modal onClose={modalClose} />}
          <Frame1></Frame1>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
