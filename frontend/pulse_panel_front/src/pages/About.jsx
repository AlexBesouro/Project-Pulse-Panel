import styles from "./About.module.css";
import { AboutCard } from "../components/AboutCard";
import dataSources from "../assets/images/DataSources.png";
import engine from "../assets/images/engine.png";
import widgets from "../assets/images/Widgets.png";
import panels from "../assets/images/Panels.png";
function About() {
    const infoCards = [
        {
            id: 1,
            top: "Internet Data Sources",
            bottom: "Websites & Online Content",
            description: "Image to represent sources of content",
            source: dataSources,
        },
        {
            id: 2,
            top: "Pulse Panel Engine",
            bottom: "Auto-Scrape",
            description: "Image to represent process of data retrieving",
            source: engine,
        },
        {
            id: 3,
            top: "Widgets (Img/HTML)",
            bottom: "Personalised Dashboards",
            description: "Image to represent personalised dashboards",
            source: widgets,
        },
        {
            id: 4,
            top: "Browser Start Page",
            bottom: "Always-on Display",
            description: "Image to represent browser page",
            source: panels,
        },
    ];
    return (
        <div className={styles["about-container"]}>
            <h1>About Pulse Panel</h1>
            <p className={styles["about-description"]}>
                Simple services to scrap the images from the desired websites with scrapper and to serve the webpage.
                The example usecase is building a dashboard. Show your personal schedule, weather, reminders, etc. with
                regular updates. Crawler setup with cronjobs can perodically save the desired images at various websites
                and the webserver serves several preconfigured dashboards. Both packages has a simple configiration -
                what to crawl and what to serve.
            </p>
            <div className={styles["about-card-grid"]}>
                {infoCards.map((card) => (
                    <AboutCard
                        key={card.id}
                        top={card.top}
                        bottom={card.bottom}
                        description={card.description}
                        source={card.source}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
