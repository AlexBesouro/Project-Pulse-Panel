import styles from "./AboutCard.module.css";

function AboutCard({ top, bottom, description, source }) {
    return (
        <div className={styles["about-card"]}>
            <h2>{top}</h2>
            <div className={styles["img-container"]}>
                <img src={source} alt={description} />
            </div>
            <h2>{bottom}</h2>
        </div>
    );
}
export { AboutCard };
