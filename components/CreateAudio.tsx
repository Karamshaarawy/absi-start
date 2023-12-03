import Image from "next/image";
import audioImg from "@/public/SVGs/createAudioFile.svg";
import classes from "./CreateAudioStyle.module.css";

export default function CreateAudio(props: any) {
  return (
    <div
      onClick={() => {
        props.onClick("createAudio");
      }}
      className={classes.frame}
    >
      <Image src={audioImg} alt="create audio" />
      <p className={classes.text}>Create Audio File</p>
    </div>
  );
}
