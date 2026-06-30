import styles from "./Home.module.css";
import { PageCard } from "../components/cards/PageCard";
function Home() {
    const cards = [
        {
            id: 1,
            title: "Panels",
            subHeader: "Your Dashboards",
            description: "Organize, create, and manage widgets to design your perfect dashboard layout.",
            linkTo: "/panels",
        },
        {
            id: 2,
            title: "Widgets",
            subHeader: "Building Blocks",
            description: "Add content elements to your panels, upload data, or link them to online sources",
            linkTo: "/widgets",
        },
        {
            id: 3,
            title: "Data Sources",
            subHeader: "Connect Your Content",
            description: "Define and manage internet sources that supply real-time information for your widgets",
            linkTo: "/sources",
        },
    ];
    return (
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>Dashboard Management</h1>
            <p className={styles["subtitle"]}>Create and manage your dashboards, widgets, and data sources</p>
            <div className={styles["card-grid"]}>
                {cards.map((card) => (
                    <PageCard
                        key={card.id}
                        title={card.title}
                        subHeader={card.subHeader}
                        description={card.description}
                        linkTo={card.linkTo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
