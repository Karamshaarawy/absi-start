import Image from "next/image";
import imageImg from "@/public/SVGs/createImageFile.svg";
import classes from "./CreateImageStyle.module.css";

export default function CreateImage(props: any) {
  return (
    <div
      onClick={() => {
        props.onClick("createImage");
      }}
      className={classes.frame}
    >
      <Image src={imageImg} alt="create image" />
      <p className={classes.text}>Create Image File</p>
    </div>
  );
}
