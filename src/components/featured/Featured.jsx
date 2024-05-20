import React from "react";
import styles from "./featured.module.css"

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Cong Le here!</b> Discover my stories and creative ideas.</h1>
                <div className={styles.post}>
                    <div className={styles.imgContainer}>
                        <Image src="/p1.png" alt="" fill />
                    </div>
                    <div className={styles.imgContainer}></div>
                </div>
        </div>
    )
}

export default Featured