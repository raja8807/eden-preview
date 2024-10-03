import React, { useState } from "react";

import styles from "./header.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Image from "next/image";
import Link from "next/link";
import { Plus, X } from "react-bootstrap-icons";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href="/">HOME</Link>
      <Link href="/">FLAVOURS</Link>
      <Link href="/">SHOP</Link>
      <Link href="/">CONTACT</Link>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.Header}>
      <CustomContainer ofHid={false}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo/logo_main.png"
                alt="main_logo"
                width={80}
                height={80}
              />
            </Link>
          </div>

          <div className={styles.right}>
            <div className={styles.menuIcon}>
              {showMenu && <Menu />}
              <Plus
                className={`${styles.ico} ${
                  showMenu ? styles.open : styles.close
                }`}
                onClick={() => {
                  setShowMenu((p) => !p);
                }}
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
