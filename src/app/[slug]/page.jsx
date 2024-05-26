import styles from "./singlePage.module.css"
import Menu from "@/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Cong Le</span>
                            <span className={styles.date}>26.05.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae odit animi voluptatibus consequatur beatae tenetur amet velit deserunt dicta, ad excepturi doloremque. Ut placeat, a illum totam eaque labore!
                        </p>
                        <h2>Lorem ipsum</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae odit animi voluptatibus consequatur beatae tenetur amet velit deserunt dicta, ad excepturi doloremque. Ut placeat, a illum totam eaque labore!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae odit animi voluptatibus consequatur beatae tenetur amet velit deserunt dicta, ad excepturi doloremque. Ut placeat, a illum totam eaque labore!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae odit animi voluptatibus consequatur beatae tenetur amet velit deserunt dicta, ad excepturi doloremque. Ut placeat, a illum totam eaque labore!
                        </p>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage