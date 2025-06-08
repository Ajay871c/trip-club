"use client";
import styles from "./features.module.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Features() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);
    const featureCards = [
        {
            id: 1,
            title: "Works",
            description:
                "A design wizard that delivers top-notch masterpieces whenever you crave it!",
            icon: "/1.png",
            ani: "zoom-in-up",
        },
        {
            id: 2,
            title: "Benefits",
            description:
                "You’ll get stress-free design like magic, delivering consistent quality at a steady price.",
            icon: "/1.png",
            ani: "zoom-in-up",
        },
        {
            id: 3,
            title: "Process",
            description:
                "You can effortlessly throw in, organize, and keep tabs on all your requests using your very own Trello board.",
            icon: "/1.png",
            ani: "zoom-in-up",
        },
        {
            id: 4,
            title: "Pricing",
            description:
                "No shady charges, no unexpected shocks! Stick to one flat fee, month after month.",
            icon: "/1.png",
            ani: "zoom-in-up",
        },
    ];

    return (
        <section className={styles.features}>
            <div className={styles.grid}>
                {featureCards.map((feature) => (
                    <div
                        className={styles.card}
                        key={feature.id}
                        data-aos={feature.ani}
                    >
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className={styles.icon}
                        />
                        <h3 className={styles.title}>{feature.title}</h3>
                        <p className={styles.description}>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
