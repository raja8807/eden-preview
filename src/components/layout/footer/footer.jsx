import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./footer.module.scss";
import { Image } from "react-bootstrap";
import SocialLinks from "@/components/ui/social_links/social_links";
import Link from "next/link";
import { ChevronRight, Link45deg } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <CustomContainer>
        <div className={styles.top}>
          <div className={styles.left}>
            <Image src="/logo/logo_main.png" width={100} alt="logo" />
            <p>Energize your life, the Tigris way</p>
            <SocialLinks />
          </div>

          <div className={styles.right}>
            <div className={styles.box}>
              <h1>Quick Links</h1>
              <Link href="/"> Home</Link>
              <Link href="/">Products</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Shop Now</Link>
            </div>
            <div className={styles.box}>
              <h1>Flavours</h1>
              <Link href="/">Lychee</Link>
              <Link href="/">Blueberry</Link>
              <Link href="/">Blueberry</Link>
              <Link href="/">Blueberry</Link>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div>&copy; 2024</div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
