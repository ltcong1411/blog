import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageConatiner}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Cong Le</span>
            <span className={styles.date}> - 22.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageConatiner}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Cong Le</span>
            <span className={styles.date}> - 22.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageConatiner}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Cong Le</span>
            <span className={styles.date}> - 22.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageConatiner}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Cong Le</span>
            <span className={styles.date}> - 22.05.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
