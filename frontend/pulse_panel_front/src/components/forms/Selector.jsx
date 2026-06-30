import styles from "./Selector.module.css";

function Selector({ name, label, description, onChange, placeholder = "Select an option...", options = [], ...props }) {
    return (
        <div className={styles["selector-container"]}>
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name} onChange={onChange} {...props}>
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.value}
                    </option>
                ))}
            </select>
            {description && (
                <div title={description} className={styles["row-description"]}>
                    {description}
                </div>
            )}
        </div>
    );
}

export { Selector };
