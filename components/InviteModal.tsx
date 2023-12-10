import ReactDOM from "react-dom";
import classes from "./InviteModalStyle.module.css";
import { Fragment } from "react";
import { Button } from "antd";

export default function InviteModal(props: any) {
  const ModalDiv: any = document.getElementById("modalContainer");

  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={props.onClose} className={classes.back}></div>
      <div className={classes.modal}>
        <p className={classes.sendMessage}>send a Quick Invite</p>
        <p className={classes.generateMessage}>
          genrate a link to share via email email or sms
        </p>
        <div className={classes.div2}>
          <p className={classes.input}>https://www.absi.app/Sd5225a</p>
          <Button className={classes.copyLinkButton}>Copy Link</Button>
        </div>
      </div>
    </Fragment>,
    ModalDiv
  );
}
