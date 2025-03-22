import Image from "next/image";
import type {JSX} from "react";

import img from "./image/images.png";
import styles from "./page.module.scss";

export default function Home(): JSX.Element {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>the page</h1>

                <Image
                    alt="Picture of the author"
                    height={50}
                    src={img}
                    width={50}
                    // sizes="300px"
                />

                <Image
                    alt="Picture of the author"
                    height={300}
                    // from "public folder"
                    // sizes="300px"
                    // less than 768px -> 100vw
                    // less than 1200px -> 50vw
                    // other screen (i. e. bigger than 1200) -> 33vw
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/image/images.png"
                    width={800}
                />
            </main>
        </div>
    );
}
