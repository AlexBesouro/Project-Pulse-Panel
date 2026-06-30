import styles from "./PageCard.module.css";
import { Link } from "react-router-dom";

function PageCard({ title, subHeader, description, linkTo }) {
    return (
        <div className={styles["page-card"]}>
            <h2>{title}</h2>
            <h3>{subHeader}</h3>
            <p>{description}</p>
            <Link className={styles["page-card-link"]} to={linkTo} aria-label={`Open ${title}`} />
        </div>
    );
}
export { PageCard };
