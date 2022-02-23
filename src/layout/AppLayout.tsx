import React from "react";
import { AppLayoutProps } from "@/@types/layout";
import styles from "@/styles/pages/index.module.css";

export default function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  const scrollToView = (refr: React.MutableRefObject<HTMLInputElement>) => {
    if (refr.current) {
      refr.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex flex-col w-full min-h-screen justify-between'>
      <div className={styles.bg_gradient_container}></div>
      <div className={styles.body_wrapper}>{children}</div>
    </div>
  );
}
