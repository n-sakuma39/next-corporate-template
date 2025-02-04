"use client";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import cx from "classnames";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const handleLinkClick = () => {
    if (isOpen) {
      close();
    }
  };

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={handleLinkClick}>
              ニュース
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={handleLinkClick}>
              メンバー
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="メニュー" width={24} height={24} />
        </button>
      </nav>

      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
