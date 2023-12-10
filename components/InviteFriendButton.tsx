import { Button } from "antd";
import classes from "./InviteFriendButtonStyle.module.css";
import Image from "next/image";
import share from "@/public/SVGs/share2.svg";
import { useState } from "react";
import InviteModal from "./InviteModal";

export default function InviteFriendButton() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const inviteFriendHandler = () => {
    setShowInviteModal(true);
    console.log(showInviteModal);
  };

  const modalClose = () => {
    setShowInviteModal(!showInviteModal);
    console.log("close", showInviteModal);
  };

  return (
    <>
      <Button onClick={inviteFriendHandler} className={classes.invite}>
        Invite a Friend
        <Image className={classes.shareIcon} src={share} alt="share" />
      </Button>
      {showInviteModal && <InviteModal onClose={modalClose} />}
    </>
  );
}
