import type {JSX} from "react";

import styles from "./page.module.scss";

export default function Home(): JSX.Element {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>the page</h1>
            </main>
        </div>
    );
}
