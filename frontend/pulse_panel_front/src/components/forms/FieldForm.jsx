import styles from "./FieldForm.module.css";

function FieldForm({ type, label, name, description, onChange, ...props }) {
    return (
        <div className={styles["row-container"]}>
            {label && (
                <label className={styles["row-label"]} htmlFor={name}>
                    {label}
                </label>
            )}
            <div className={styles["row-content"]}>
                {name === "panelUrl" && <span className={styles["url-prefix"]}>http://localhost:5173/panels/</span>}
                <input
                    id={name}
                    type={type}
                    name={name}
                    onChange={onChange}
                    className={
                        type === "text"
                            ? styles["text-input"]
                            : type === "number"
                              ? styles["number-input"]
                              : styles["checkbox-input"]
                    }
                    {...props}
                />
            </div>
            {description && (
                <div title={description} className={styles["form-description"]}>
                    {description}
                </div>
            )}
        </div>
    );
}

export { FieldForm };
