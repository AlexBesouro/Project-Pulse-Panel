import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useState } from "react";
import { Navbar } from "./Navbar";

function Layout() {
    // const [sidebarItem, setSidebarItem] = useState([{ id: 1, text: "Element 1" }]);
    return (
        <div className={styles["layout"]}>
            <header className={styles["header"]}>
                <h2>Pulse Panel</h2>
                <div className={styles["header-content"]}>
                    <Navbar />
                </div>
            </header>

            {/* <div className={styles["sidebar"]}>
                <aside>
                    <ul>
                        {sidebarItem.map((item) => (
                            <li key={item.id}>{item.text}</li>
                        ))}
                    </ul>
                </aside>
            </div> */}

            <main className={styles["main"]}>
                <div className={styles["main-container"]}>
                    <Outlet />
                </div>
            </main>

            <footer className={styles["footer"]}>
                <p>&copy; 2026 Pulse Panel</p>
            </footer>
        </div>
    );
}

export { Layout };
