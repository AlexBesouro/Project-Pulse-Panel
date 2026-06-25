import styles from "./Panels.module.css";
import { Sidebar } from "../components/Sidebar";
function Panels() {
    const panelsList = [
        {
            panelId: 1,
            panelName: "panel_1",
            panelURL: "urlurlurl",
            autoRefresh: true,
        },
        {
            panelId: 2,
            panelName: "panel_2",
            panelURL: "urlurlurl",
            autoRefresh: true,
        },
        {
            panelId: 3,
            panelName: "panel_3",
            panelURL: "urlurlurl",
            autoRefresh: true,
        },
    ];
    return (
        <div className={styles["panels"]}>
            <Sidebar children={panelsList} />
        </div>
    );
}
export default Panels;
