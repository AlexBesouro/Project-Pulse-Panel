import styles from "./Panels.module.css";
import { Button } from "../components/Button";
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
                <div className={styles["panel-config-form"]}>
                    <h3>Panel Configuration</h3>
                    <form id="panel-form" onSubmit={handleFormSubmit} className={styles["form-content"]}>
                        <div className={styles["config-form"]}>
                            <div className={styles["form-row"]}>
                                <label className={styles["row-label"]}>Panel Name</label>
                                <div className={styles["row-content"]}>
                                    <input
                                        type="text"
                                        name="panelName"
                                        placeholder="Enter panel name"
                                        value={panelsData.panelName}
                                        onChange={handleInputChange}
                                        className={styles["text-input"]}
                                    />
                                    <div className={styles["form-help-text"]}>A descriptive name for your panel</div>
                                </div>
                            </div>

                            <div className={styles["form-row"]}>
                                <label className={styles["row-label"]}>Panel URL</label>
                                <div className={styles["row-content"]}>
                                    <div className={styles["url-input-wrapper"]}>
                                        <span className={styles["url-prefix"]}>http://localhost:5173/panels/</span>
                                        <input
                                            type="text"
                                            name="panelUrl"
                                            placeholder="custom-url"
                                            value={panelsData.panelUrl}
                                            onChange={handleInputChange}
                                            className={styles["url-input"]}
                                        />
                                        <button type="button" onClick={handleCopyUrl} className={styles["copy-button"]}>
                                            Copy
                                        </button>
                                    </div>
                                    <div className={styles["form-help-text"]}>
                                        Panel is visible only for you (login required)
                                    </div>
                                </div>
                            </div>

                            <div className={styles["form-row"]}>
                                <label className={styles["row-label"]}>Auto-refresh</label>
                                <div className={styles["row-content"]}>
                                    <div className={styles["switch-container"]}>
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
                                    <div className={styles["form-help-text"]}>
                                        How often the panel should refresh itself in your browser
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["panel-content-form"]}>
                            <div className={styles["builder-container"]}>
                                <Button
                                    actionType="redirect"
                                    type="button"
                                    form="panel-form"
                                    onClick={console.log("Will redirect to builder page")}
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <label className={styles["row-label"]}>Panel position X</label>
                                <div className={styles["row-content"]}>
                                    <input
                                        type="number"
                                        name="startPointX"
                                        placeholder="Enter panel's X coordinate"
                                        value={panelsData.startPointX}
                                        onChange={handleInputChange}
                                        className={styles["number-input"]}
                                    />
                                    <div className={styles["form-help-text"]}>Starting top left point X</div>
                                </div>
                                <label className={styles["row-label"]}>Panel position Y</label>
                                <div className={styles["row-content"]}>
                                    <input
                                        type="number"
                                        name="startPointY"
                                        placeholder="Enter panel's Y coordinate"
                                        value={panelsData.startPointY}
                                        onChange={handleInputChange}
                                        className={styles["number-input"]}
                                    />
                                    <div className={styles["form-help-text"]}>Starting top left point Y</div>
                                </div>
                                <label className={styles["row-label"]}>Panel width</label>
                                <div className={styles["row-content"]}>
                                    <input
                                        type="number"
                                        name="width"
                                        placeholder="Enter panel's width"
                                        value={panelsData.width}
                                        onChange={handleInputChange}
                                        className={styles["number-input"]}
                                    />
                                    <div className={styles["form-help-text"]}>Enter panel's width in px </div>
                                </div>
                                <label className={styles["row-label"]}>Panel height</label>
                                <div className={styles["row-content"]}>
                                    <input
                                        type="number"
                                        name="height"
                                        placeholder="Enter panel's height"
                                        value={panelsData.height}
                                        onChange={handleInputChange}
                                        className={styles["number-input"]}
                                    />
                                    <div className={styles["form-help-text"]}>Enter panel's height in px </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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
