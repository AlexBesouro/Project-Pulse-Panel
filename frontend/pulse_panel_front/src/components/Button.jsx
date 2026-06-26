import styles from "./Button.module.css";
import saveIcon from "../assets/icons/save.png";
import cancelIcon from "../assets/icons/cancel.png";
import deleteIcon from "../assets/icons/delete.png";
import brushIcon from "../assets/icons/brush.png";
function Button({ actionType, type = "button", ...props }) {
    const config = {
        delete: { text: "Delete", style: "red", path: deleteIcon },
        cancel: { text: "Cancel", style: "blue", path: cancelIcon },
        save: { text: "Save", style: "green", path: saveIcon },
        redirect: { text: "Open Builder", style: "violet", path: brushIcon },
    };
    const action = config[actionType];
    return (
        <button className={`${styles.button} ${styles[action.style]}`} type={type} {...props}>
            <div className={styles["icon-div"]}>
                <img src={action.path} alt="Icon" />
            </div>
            {action.text}
        </button>
    );
}
export { Button };
