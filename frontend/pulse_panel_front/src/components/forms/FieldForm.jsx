import styles from "./FieldForm.module.css";

function FieldForm({ type, name, desctription, onChange, ...props }) {
    return (
        <div className={styles["row-container"]}>
            <label className={styles["row-label"]} htmlFor={name}>
                {name}
            </label>
            <div className={styles["row-content"]}>
                {name === "Panel's URL" && <span className={styles["url-prefix"]}>http://localhost:5173/panels/</span>}
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
            {desctription && (
                <div title={desctription} className={styles["form-description"]}>
                    {desctription}
                </div>
            )}
        </div>
    );
}

export { FieldForm };
