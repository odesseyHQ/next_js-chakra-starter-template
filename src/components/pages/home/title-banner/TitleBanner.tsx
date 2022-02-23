import React from "react";
import LottieGenerator from "@/components/globals/lottie-generator";
import WebDevelopmentIllustration from "@/assets/lotties/web-development-illustration.json";
import styles from "@/styles/components/pages/TitleBanner.module.css";

const data = {
  heading: "The web development company",
  email: "ow@gmail.com",
};

export default function TitleBanner() {
  return (
    <div className={styles.title_banner_wrapper}>
      <div className={styles.title_banner_header}>
        <h1 className={styles.title_banner_heading}>{data.heading}</h1>

        <p className={styles.title_banner_content}>
          We help businesses to grow with the opportunities of web. Solutions
          for
          <span className={styles.title_banner_content_strong}> UI/UX</span>,
          <span className={styles.title_banner_content_strong}>
            {" "}
            Backend infrastructures
          </span>
          <span> and </span>
          <span className={styles.title_banner_content_strong}>
            Web applications
          </span>
          . We are lean and affordable.
        </p>

        <a className={styles.title_banner_button} href={`mailto:${data.email}`}>
          {data.email}
        </a>
      </div>
      <div className='w-full flex flex-col justify-start items-end tablet:hidden'>
        <LottieGenerator animationData={WebDevelopmentIllustration} />
      </div>
    </div>
  );
}
