"use client";
import styles from "./testimonials.module.css";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const testimonialCards = [
    {
        id: 1,
        quote: `Collaborating with DIVADSGN was an absolute delight!
Their team's boundless creativity and meticulousness went above and beyond our wildest expectations.`,
        image: "/profile.jpg",
        name: "Jason Dom",
        role: "Startup Founder",
        stars: 5,
    },
    {
        id: 2,
        quote: `Absolutely mind-blowing skills and absolute professionalism!
They absolutely skyrocketed our project with their groundbreaking ideas and impeccable implementation.`,
        image: "/profile.jpg",
        name: "Michella Carter",
        role: "Startup Founder",
        stars: 5,
    },
    {
        id: 3,
        quote: `Kudos to the design agency for their outstanding work!
Their dedication to excellence and innovation was evident from the very first brainstorming session to the final masterpiece.`,
        image: "/profile.jpg",
        name: "Rob Jackson",
        role: "Entrepreneurs",
        stars: 5,
    },
];

export default function Testimonials() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);

    return (
        <section className={styles.testimonials} data-aos="fade-up">
            <h2 className={styles.title}>What clients say about us</h2>
            <div className={styles.cards}>
                {testimonialCards.map((card) => (
                    <div className={styles.card} key={card.id} data-aos="zoom-in">
                        <p className={styles.quote}>{card.quote}</p>
                        <div className={styles.profile}>
                            <Image
                                src={card.image}
                                alt={card.name}
                                width={50}
                                height={50}
                                className={styles.avatar}
                            />
                            <div>
                                <strong className={styles.name}>
                                    {card.name}
                                </strong>
                                <p className={styles.role}>{card.role}</p>
                            </div>
                        </div>
                        <div className={styles.stars}>
                            {"⭐".repeat(card.stars)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
