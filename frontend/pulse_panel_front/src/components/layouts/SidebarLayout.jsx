import { Outlet } from "react-router-dom";
import { Sidebar } from "../bars/Sidebar";
import styles from "./SidebarLayout.module.css";

function SidebarLayout() {
    return (
        <div className={styles["main-with-sidebar"]}>
            <Sidebar />
            <div className={styles["page-content"]}>
                <Outlet />
            </div>
        </div>
    );
}

export { SidebarLayout };
