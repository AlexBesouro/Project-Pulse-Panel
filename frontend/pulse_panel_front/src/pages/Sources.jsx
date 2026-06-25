import styles from "./Sources.module.css";
import { Sidebar } from "../components/Sidebar";
function Sources() {
    const sourcesList = [
        {
            sourcesId: 1,
            sourcesName: "source_1",
            sourcesLink: "urlurlurl",
        },
        {
            sourcesId: 2,
            sourcesName: "source_2",
            sourcesLink: "urlurlurl",
        },
        {
            sourcesId: 3,
            sourcesName: "source_3",
            sourcesLink: "urlurlurl",
        },
    ];
    return (
        <div className={styles["sources"]}>
            <Sidebar children={sourcesList} />
        </div>
    );
}
export default Sources;
