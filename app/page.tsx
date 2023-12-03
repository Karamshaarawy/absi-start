"use client";
import Image from "next/image";
import logo from "@/public/absi_logo_complete 3.png";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/reg-sign/signin");
  }, 5000);

  return (
    <div className={classes.startPage}>
      <Image src={logo} alt="ABSI" />
    </div>
  );
};

export default HomePage;
