import styles from "./Panels.module.css";
import { Button } from "../components/Button";
import { FieldForm } from "../components/forms/FieldForm";
import { useState } from "react";
function Panels() {
    const [panelsData, setPanelsData] = useState({
        panelName: "",
        panelUrl: "",
        autoRefresh: false,
        startPointX: 0,
        startPointY: 100,
        width: 300,
        height: 200,
    });
    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setPanelsData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Saved data:", panelsData);
    };

    const handleCopyUrl = () => {
        const fullUrl = `http://localhost:5173/panels/${panelsData.panelUrl}`;
        navigator.clipboard.writeText(fullUrl);
        alert("URL copied!");
    };
    const handleDelete = () => console.log("Deleted");
    const handleCancel = () => console.log("Canceled");
    return (
        <div className={styles["panels"]}>
            <div className={styles["form-container"]}>
                <h3>Panel Configuration</h3>
                <form id="panel-form" onSubmit={handleFormSubmit} className={styles["form-content"]}>
                    <div className={styles["panel-config-form"]}>
                        {/* Имя */}
                        <div className={styles["form-row"]}>
                            <FieldForm
                                type="text"
                                name="Panel's name"
                                placeholder="Enter a panel's name..."
                                value={panelsData.panelName}
                                onChange={handleInputChange}
                                desctription="A descriptive name for your panel"
                            />
                        </div>

                        <div className={styles["form-row-url"]}>
                            <FieldForm
                                type="text"
                                name="Panel's URL"
                                placeholder="custom-url"
                                value={panelsData.panelUrl}
                                onChange={handleInputChange}
                                desctription="Panel is visible only for you (login required)"
                            />
                            <button type="button" onClick={handleCopyUrl} className={styles["copy-button"]}>
                                Copy
                            </button>
                        </div>

                        <div className={styles["form-row-autorefresh"]}>
                            <label className={styles["row-label-fallback"]}>Auto-refresh</label>
                            <div className={styles["slider-wrapper"]}>
                                <label className={styles["switch"]}>
                                    <input
                                        type="checkbox"
                                        name="autoRefresh"
                                        checked={panelsData.autoRefresh}
                                        onChange={handleInputChange}
                                    />
                                    <span className={styles["slider"]}></span>
                                </label>
                                <span className={styles["slider-text"]}>Enable auto-refresh</span>
                                <input
                                    type="text"
                                    placeholder="--:--:--"
                                    className={styles["time-input"]}
                                    disabled={!panelsData.autoRefresh}
                                />
                            </div>
                            <div
                                title="How often the panel should refresh itself in your browser"
                                className={styles["form-description-fallback"]}
                            >
                                How often the panel should refresh itself in your browser
                            </div>
                        </div>
                    </div>

                    <div className={styles["panel-content-form"]}>
                        <div className={styles["builder-container"]}>
                            <h3 style={{ border: "none", padding: 0 }}>Panel Content</h3>
                            <Button
                                actionType="redirect"
                                type="button"
                                form="panel-form"
                                onClick={() => console.log("Will redirect to builder page")}
                            />
                        </div>

                        <div className={styles["panel-config-form"]}>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's position X"
                                    placeholder="Enter the panel's X coordinate"
                                    value={panelsData.startPointX}
                                    onChange={handleInputChange}
                                    desctription="Panel's top-left point X"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's position Y"
                                    placeholder="Enter the panel's Y coordinate"
                                    value={panelsData.startPointY}
                                    onChange={handleInputChange}
                                    desctription="Panel's top-left point Y"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's width"
                                    placeholder="Enter the panel's width"
                                    value={panelsData.width}
                                    onChange={handleInputChange}
                                    desctription="Panel's width in px"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's height"
                                    placeholder="Enter the panel's height"
                                    value={panelsData.height}
                                    onChange={handleInputChange}
                                    desctription="Panel's height in px"
                                />
                            </div>
                        </div>
                    </div>
                </form>

                <div className={styles["cancel-save-container"]}>
                    <Button actionType="cancel" type="button" form="panel-form" onClick={handleCancel} />
                    <Button actionType="save" type="submit" form="panel-form" />
                    <Button actionType="delete" type="button" form="panel-form" onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
}

export default Panels;
