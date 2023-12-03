import ReactDOM from "react-dom";
import classes from "./ModalStyle.module.css";
import CreateText from "./CreateText";
import CreateImage from "./CreateImage";
import CreateAudio from "./CreateAudio";
import { useRouter } from "next/navigation";
import { useRef } from "react";
export default function Modal(props: any) {
  const router = useRouter();

  const clickHandler = (path: any) => {
    router.push(`/Home/${path}`);
  };

  const ModalDiv: any = document.getElementById("modal-container");

  return ReactDOM.createPortal(
    <div>
      <div onClick={props.onClose} className={classes.back}></div>
      <div className={classes.box}>
        <CreateText onClick={clickHandler} />
        <CreateAudio onClick={clickHandler} />
        <CreateImage onClick={clickHandler} />
      </div>
    </div>,
    ModalDiv
  );
}
