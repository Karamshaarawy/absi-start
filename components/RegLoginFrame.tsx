import Image from "next/image";
import classes from "./RegLoginFrameStyle.module.css";
import Logo from "@/public/absi_logo_complete.png";

export default function Frame(props: any) {
  return (
    <div className={classes.frame}>
      <div>
        <Image className={classes.image} src={Logo} alt="ABSI logo" />
      </div>
      {props.children}
    </div>
  );
}
