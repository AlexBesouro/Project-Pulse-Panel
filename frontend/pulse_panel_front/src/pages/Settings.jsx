import styles from "./Settings.module.css";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

function Settings() {
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    // If there is no theme in localStorage checkin browser's theme
    const { theme, toggleTheme } = useTheme();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };
    // Form validation
    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        // Front-end part of password verification
        const newError = {};

        if (!passwordData.currentPassword) {
            newError.currentPassword = "Field is required";
        }

        if (!passwordData.newPassword) {
            newError.newPassword = "Field is required";
        } else if (passwordData.newPassword.length < 8) {
            newError.newPassword = "Password must be at least 6 characters";
        } else if (passwordData.newPassword === passwordData.currentPassword) {
            newError.newPassword = "New password cannot be the same as current password";
        }

        if (!passwordData.confirmPassword) {
            newError.confirmPassword = "Field is required";
        } else if (passwordData.newPassword !== passwordData.confirmPassword) {
            newError.confirmPassword = "Passwords do not match";
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
            return;
        }
        //  Back-end part of password verification
        try {
            const response = await fetch("/api/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: [passwordData.currentPassword],
                    newPassword: passwordData.newPassword,
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                // Message from back-end
                if (data.message === "Incorrect password") {
                    setError({ currentPassword: "Incorrect password" });
                } else {
                    console.error(`Something went wrong: ${response.statusText}`);
                }
                return;
            }
            alert("Password changed successfully!");
            setError({});
            setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
        } catch (error) {
            console.error(error.message);
            alert("Network error. Please try again later.");
        }
    };

    return (
        <div className={styles["settings"]}>
            <h2>Settings</h2>
            <div className={styles["settings-password"]}>
                <h3>Change Password</h3>
                <form onSubmit={handlePasswordSubmit} className={styles["password-form"]}>
                    <div className={styles["form-group"]}>
                        <input
                            type="password"
                            name="currentPassword"
                            placeholder="Current Password"
                            value={passwordData.currentPassword}
                            onChange={handleInputChange}
                            className={error.currentPassword ? styles["input-error"] : ""}
                        />
                        {error.currentPassword && <span className={styles["error-text"]}>{error.currentPassword}</span>}
                    </div>
                    <div className={styles["form-group"]}>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            value={passwordData.newPassword}
                            onChange={handleInputChange}
                            className={error.newPassword ? styles["input-error"] : ""}
                        />
                        {error.newPassword && <span className={styles["error-text"]}>{error.newPassword}</span>}
                    </div>
                    <div className={styles["form-group"]}>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm New Password"
                            value={passwordData.confirmPassword}
                            onChange={handleInputChange}
                            className={error.confirmPassword ? styles["input-error"] : ""}
                        />
                        {error.confirmPassword && <span className={styles["error-text"]}>{error.confirmPassword}</span>}
                    </div>
                    <button type="submit" className={styles["submit-btn"]}>
                        Update Password
                    </button>
                </form>
            </div>
            <div className={styles["settings-theme"]}>
                <button className={styles["theme-btn"]} onClick={toggleTheme}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Mode
                </button>
            </div>
        </div>
    );
}
export default Settings;
