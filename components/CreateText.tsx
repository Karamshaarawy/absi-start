import Image from "next/image";
import textImg from "@/public/SVGs/createTextFile.svg";
import classes from "./CreateTextStyle.module.css";

export default function CreateText(props: any) {
  return (
    <div
      onClick={() => {
        props.onClick("createText");
      }}
      className={classes.frame}
    >
      <Image src={textImg} alt="create text" />
      <p className={classes.text}>Create Text File</p>
    </div>
  );
}
