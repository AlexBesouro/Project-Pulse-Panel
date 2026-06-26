import styles from "./Widgets.module.css";
import { Sidebar } from "../components/Sidebar";
function Widgets() {
    const widgetsList = [
        {
            widgetId: 1,
            widgetName: "widget_1",
            widgetType: "web",
        },
        {
            widgetId: 2,
            widgetName: "widget_2",
            widgetType: "web",
        },
        {
            widgetId: 3,
            widgetName: "widget_3",
            widgetType: "file",
        },
    ];
    return <div className={styles["widgets"]}></div>;
}
export default Widgets;
