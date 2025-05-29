import styles from "./GreekGetaways.module.css";
import Image from "next/image";


export const greekGetaways = [
    {
        id: 1,
        title: "Santorini Sunset Escape",
        image: "/image.png",
        description:
            "Glow under golden skies with sunset yacht cruises, beach yoga, and candlelit dinners with your girls.",
    },
    {
        id: 2,
        title: "Mykonos Boss Babe Retreat",
        image: "/image.png",
        description:
            "Jet-set vibes, poolside networking, beach parties, and luxury villas — all in one glam-packed escape.",
    },
    {
        id: 3,
        title: "Athens Culture Collective",
        image: "/image.png",
        description:
            "Explore ancient ruins, sip espresso in stylish cafés, and bond with your crew in the cradle of civilization.",
    },
];

export default function GreekGetaways() {
    return (
        <section className={styles.section} id="trip">
            <h2 className={styles.heading}>Featured Greek Getaways</h2>
            <div className={styles.cardGrid}>
                {greekGetaways.map((trip) => (
                    <div key={trip.id} className={styles.card}>
                        <Image
                            src={trip.image}
                            alt={trip.title}
                            width={400}
                            height={200}
                            className={styles.image}
                        />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{trip.title}</h3>
                            <p className={styles.desc}>{trip.description}</p>
                            <a href="#" className={styles.link}>
                                Learn More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
