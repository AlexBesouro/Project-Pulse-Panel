import styles from "./Panels.module.css";
import { Button } from "../components/buttons/Button";
import { FieldForm } from "../components/forms/FieldForm";
import { useState } from "react";
function Panels() {
    const [panelsData, setPanelsData] = useState({
        panelName: "",
        panelUrl: "",
        autoRefresh: false,
        refreshRate: "",
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
                <h3 className={styles["title-container"]}>Panel Configuration</h3>
                <form id="panel-form" onSubmit={handleFormSubmit} className={styles["form-content"]}>
                    <div className={styles["panel-config-form"]}>
                        <div className={styles["form-row"]}>
                            <FieldForm
                                type="text"
                                label="Panel name"
                                name="panelName"
                                placeholder="Enter a panel's name..."
                                value={panelsData.panelName}
                                onChange={handleInputChange}
                                description="A descriptive name for your panel"
                            />
                        </div>

                        <div className={styles["form-row-url"]}>
                            <FieldForm
                                type="text"
                                label="Panel URL"
                                name="panelUrl"
                                placeholder="custom-url"
                                value={panelsData.panelUrl}
                                onChange={handleInputChange}
                                description="Panel is visible only for you (login required)"
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
                                    name="refreshRate"
                                    placeholder="--:--:--"
                                    className={styles["time-input"]}
                                    value={panelsData.refreshRate}
                                    onChange={handleInputChange}
                                    disabled={!panelsData.autoRefresh}
                                />
                            </div>
                            <div
                                title="How often the panel should refresh itself in your browser (sec)"
                                className={styles["form-description-fallback"]}
                            >
                                How often the panel should refresh itself in your browser (sec)
                            </div>
                        </div>
                    </div>

                    <div className={styles["panel-content-form"]}>
                        <div className={styles["builder-container"]}>
                            <h3 className={styles["title-container"]}>Panel Content</h3>
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
                                    description="Panel's top-left point X"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's position Y"
                                    placeholder="Enter the panel's Y coordinate"
                                    value={panelsData.startPointY}
                                    onChange={handleInputChange}
                                    description="Panel's top-left point Y"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's width"
                                    placeholder="Enter the panel's width"
                                    value={panelsData.width}
                                    onChange={handleInputChange}
                                    description="Panel's width in px"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    name="Panel's height"
                                    placeholder="Enter the panel's height"
                                    value={panelsData.height}
                                    onChange={handleInputChange}
                                    description="Panel's height in px"
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
