import classes from "./settingFrameStyle.module.css";

export default function SettingFrame(props: any) {
  return <div className={classes.container}>{props.children}</div>;
}
