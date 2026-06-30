import styles from "./Sources.module.css";
import { useState } from "react";
import { FieldForm } from "../components/forms/FieldForm";
import { Button } from "../components/buttons/Button";
function Sources() {
    const [sourceData, setSourceData] = useState({
        sourceName: "",
        sourceLink: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSourceData((prev) => ({ ...prev, [name]: value }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data", sourceData);
    };
    const handleDelete = () => console.log("Deleted");
    const handleCancel = () => console.log("Canceled");
    return (
        <div className={styles["sources"]}>
            <div className={styles["form-container"]}>
                <form id="sources-form" onSubmit={handleFormSubmit} className={styles["form-content"]}>
                    <div className={styles["sources-config"]}>
                        <h3 className={styles["title-container"]}>Source Configuration</h3>
                        <div className={styles["sources-config-form"]}>
                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="text"
                                    label="Source name"
                                    name="sourceName"
                                    placeholder="Enter a source's name..."
                                    value={sourceData.sourceName}
                                    onChange={handleInputChange}
                                    description="A descriptive name for your source"
                                />
                            </div>

                            <div className={styles["form-row"]}>
                                <FieldForm
                                    type="text"
                                    label="Link"
                                    name="sourceLink"
                                    placeholder="https://example.com"
                                    value={sourceData.sourceLink}
                                    onChange={handleInputChange}
                                    description="The URL of your data source"
                                />
                            </div>
                        </div>
                    </div>
                </form>

                <div className={styles["cancel-save-container"]}>
                    <Button actionType="cancel" type="button" form="sources-form" onClick={handleCancel} />
                    <Button actionType="save" type="submit" form="sources-form" />
                    <Button actionType="delete" type="button" form="sources-form" onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
}
export default Sources;
