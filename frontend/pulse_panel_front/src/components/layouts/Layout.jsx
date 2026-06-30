import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Navbar } from "../bars/Navbar";

function Layout() {
    return (
        <div className={styles["layout"]}>
            <header className={styles["header"]}>
                <h2>Pulse Panel</h2>
                <div className={styles["header-content"]}>
                    <Navbar />
                </div>
            </header>

            <main className={styles["main"]}>
                <Outlet />
            </main>

            <footer className={styles["footer"]}>
                <p>&copy; 2026 Pulse Panel</p>
            </footer>
        </div>
    );
}

export { Layout };
