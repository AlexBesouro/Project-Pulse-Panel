import styles from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
import { useItem } from "../../hooks/useItem";

function Sidebar({ children }) {
    const location = useLocation(); // Get the current location object from React Router with special hook
    const { formattedItems, activeId, setActiveId } = useItem(children);
    const listName = {
        "/panels": "Panels",
        "/widgets": "Widgets",
        "/sources": "Data Sources",
    };

    const currentName = listName[location.pathname] || "";
    const currentItemName = currentName.slice(0, -1);
    return (
        <div className={styles["sidebar"]}>
            <h3 className={styles["sidebar-list-title"]}>{currentName}</h3>
            <div className={styles["sidebar-content"]}>
                {formattedItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <div
                            key={item.id}
                            className={`${styles["sidebar-item"]} ${isActive ? styles["active"] : ""}`}
                            onClick={() => setActiveId(item.id)}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
            <button>Add new {currentItemName}</button>
        </div>
    );
}
export { Sidebar };
