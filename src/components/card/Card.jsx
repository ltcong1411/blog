import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>22.05.2024 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati quisquam quia, tempore dolorum perferendis maxime ad iure similique iusto magni aliquam totam recusandae laudantium, omnis explicabo blanditiis nobis iste....
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
