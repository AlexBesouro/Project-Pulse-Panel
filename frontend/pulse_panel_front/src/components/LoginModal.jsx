import styles from "./LoginModal.module.css";
function LoginModal({ onClose }) {
    return (
        <div className={styles["modal-overlay"]} onClick={onClose}>
            <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
                <button className={styles["close-button"]} onClick={onClose}>
                    &times;
                </button>

                <h2>Login to Pulse Panel</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    );
}

export { LoginModal };
