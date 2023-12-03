import Image from "next/image";
import classes from "./UnlockFrame.module.css";
import unlock from "@/public/SVGs/unlock.svg";

export default function Frame() {
  return (
    <div className={classes.frame}>
      <Image className={classes.image} src={unlock} alt="" />
      <p className={classes.p1}>Unlock</p>
      <p className={classes.p2}>image,audios and text</p>
    </div>
  );
}
