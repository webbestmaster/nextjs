import type {JSX} from "react";
import Image from 'next/image'

import styles from "./page.module.scss";

import img from "./image/images.png"

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
                    sizes="300px"

                />

                <Image
                    alt="Picture of the author"
                    height={60}
                    // from "public folder"
                    sizes="300px"
                    src="/image/images.png"
                    width={60}
                />

            </main>
        </div>
    );
}
