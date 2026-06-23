import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import homeIcon from "../assets/icons/home.jpg";
import gitIcon from "../assets/icons/git.png";
import infoIcon from "../assets/icons/info--v2.jpg";
import settingsIcon from "../assets/icons/Settings.png";
import loginIcon from "../assets/icons/login.jpg";
import { useState } from "react";
import { LoginModal } from "./LoginModal";

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <nav className={styles["navigation"]}>
            <div>
                <Link to="/" className={styles["link-style"]} data-tooltip="Home">
                    <img src={homeIcon} alt="Home page" />
                </Link>
                <a
                    href="https://gitlab.com/pulse_panel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["link-style"]}
                >
                    <img src={gitIcon} alt="GitLab" />
                </a>
            </div>
            <div>
                <Link to="/about" className={styles["link-style"]} data-tooltip="About Pulse Panel">
                    <img src={infoIcon} alt="About Pulse Panel" />
                </Link>
                <Link to="/settings" className={styles["link-style"]} data-tooltip="Settings Pulse Panel">
                    <img src={settingsIcon} alt="Settings Pulse Panel" />
                </Link>
                <button
                    className={styles["link-style"]}
                    data-tooltip="Login to Pulse Panel"
                    onClick={() => setIsModalOpen(true)}
                >
                    <img src={loginIcon} alt="Login to Pulse Panel" />
                </button>

                {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
            </div>
        </nav>
    );
}

export { Navbar };
