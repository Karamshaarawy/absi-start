import classes from "./CreateFrameStyle.module.css";
import Image from "next/image";
import Create from "@/public/SVGs/create.svg";
import Arrow from "@/public/SVGs/arrowUp.svg";
import { useState } from "react";
import Modal from "./Modal";
export default function Frame(props: any) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandle = () => {
    setShowModal(false);
  };

  return (
    <div onClick={showModalHandle} className={classes.frame}>
      <div>
        <Image className={classes.image1} src={Create} alt="create " />
        <Image className={classes.arrow} src={Arrow} alt="" />
      </div>
      <p className={classes.p1}>Create</p>
      <p className={classes.p2}>images, audios and text files</p>
      {showModal && <Modal />}
    </div>
  );
}
