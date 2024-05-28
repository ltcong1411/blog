import Link from "next/link";
import Image from "next/image";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
        </div>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cong Le</span>
              <span className={styles.date}>28.05.2024</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            numquam veritatis suscipit tempore ut alias sapiente accusamus
            recusandae nisi! Numquam nam eaque magni ipsam commodi sit error
            cupiditate consequatur itaque!
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cong Le</span>
              <span className={styles.date}>28.05.2024</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            numquam veritatis suscipit tempore ut alias sapiente accusamus
            recusandae nisi! Numquam nam eaque magni ipsam commodi sit error
            cupiditate consequatur itaque!
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cong Le</span>
              <span className={styles.date}>28.05.2024</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            numquam veritatis suscipit tempore ut alias sapiente accusamus
            recusandae nisi! Numquam nam eaque magni ipsam commodi sit error
            cupiditate consequatur itaque!
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Cong Le</span>
              <span className={styles.date}>28.05.2024</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            numquam veritatis suscipit tempore ut alias sapiente accusamus
            recusandae nisi! Numquam nam eaque magni ipsam commodi sit error
            cupiditate consequatur itaque!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
