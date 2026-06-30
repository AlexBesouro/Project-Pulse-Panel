import { useState } from "react";
import { Button } from "../components/buttons/Button";
import { FieldForm } from "../components/forms/FieldForm";
import { Selector } from "../components/forms/Selector";
import styles from "./Widgets.module.css";

const sourceTypeOptions = [{ value: "File" }, { value: "Web Scraper" }];
const sourceList = [{ value: "source 1" }, { value: "source 2" }];

const locatorOptions = [
    { value: "ID" },
    { value: "Class Name" },
    { value: "XPath" },
    { value: "CSS Selector" },
    { value: "Tag Name" },
];

function Widgets() {
    const [widgetData, setWidgetData] = useState({
        widgetName: "",
        sourceType: "Web Scraper",
        file: null,
        source: "",
        scrapRate: "",
        targetUrl: "",
        locator: "ID",
        valueToLocate: "",
        numMatch: 0,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWidgetData((prev) => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        setWidgetData((prev) => ({ ...prev, file: e.target.files[0] }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data", widgetData);
    };
    const handleDelete = () => console.log("Deleted");
    const handleCancel = () => console.log("Canceled");
    return (
        <div className={styles["widgets"]}>
            <div className={styles["form-container"]}>
                <form id="widget-form" onSubmit={handleFormSubmit} className={styles["form-content"]}>
                    <div className={styles["widget-config"]}>
                        <h3 className={styles["title-container"]}>Widget Configuration</h3>
                        <div className={styles["widget-config-form"]}>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="text"
                                    label="Widget name"
                                    name="widgetName"
                                    placeholder="Enter a widget's name..."
                                    value={widgetData.widgetName}
                                    onChange={handleInputChange}
                                    description="A descriptive name for your widget"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <Selector
                                    name="sourceType"
                                    label={"Source type"}
                                    description="Choose how you want to provide data for this widget"
                                    value={widgetData.sourceType}
                                    options={sourceTypeOptions}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    {widgetData.sourceType === "File" ? (
                        <div className={styles["file-config"]}>
                            <h3 className={styles["title-container"]}>File Upload</h3>
                            <div className={styles["upload"]}>
                                <label htmlFor={"upload"}>Upload file:</label>
                                <input
                                    id="upload"
                                    type="file"
                                    onChange={handleFileChange}
                                    required={widgetData.sourceType === "File"}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={styles["scrapping-form"]}>
                            <div className={styles["form-row"]}>
                                <Selector
                                    name="source"
                                    label="Source"
                                    desctription="Choose your source"
                                    value={widgetData.source}
                                    options={sourceList}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="number"
                                    label="Scrap rate"
                                    name="scrapRate"
                                    placeholder="Enter a number of minutes..."
                                    value={widgetData.scrapRate}
                                    onChange={handleInputChange}
                                    description="How often to refresh the data "
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="text"
                                    label="Target URL"
                                    name="targetUrl"
                                    placeholder="https://example.com"
                                    value={widgetData.targetUrl}
                                    onChange={handleInputChange}
                                    description="The webpage URL to scrape data. If different from source"
                                />
                            </div>
                            <div className={styles["form-row"]}>
                                <Selector
                                    name="locator"
                                    label="Locator Type:"
                                    value={widgetData.locator}
                                    onChange={handleInputChange}
                                    options={locatorOptions}
                                    description="How to locate the element."
                                />

                                <div>
                                    <FieldForm
                                        type="text"
                                        name="valueToLocate"
                                        placeholder="Enter loactor valuer..."
                                        value={widgetData.valueToLocate}
                                        onChange={handleInputChange}
                                        description="The value to locate"
                                    />
                                </div>

                                <div>
                                    <FieldForm
                                        type="number"
                                        name="numMatch"
                                        value={widgetData.numMatch}
                                        onChange={handleInputChange}
                                        description="Which match to select"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </form>

                <div className={styles["cancel-save-container"]}>
                    <Button actionType="cancel" type="button" form="widget-form" onClick={handleCancel} />
                    <Button actionType="save" type="submit" form="widget-form" />
                    <Button actionType="delete" type="button" form="widget-form" onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
}
export default Widgets;
