import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import styles from "./option.module.css";

const Option = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);
    return (
        <div
            className={styles.option}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
        >
            <h2 className={styles.optionTitle}>
                Become a Greek Getaway Ambassador
            </h2>
            <p className={styles.optionDesc}>
                Help us spread the word about our campus trips! If you're a
                college girl with a love for travel and sisterhood, become an
                ambassador and earn free trips, rewards, and lifetime memories
            </p>
            <a href="/" className="btn">
                Apply Now
            </a>
        </div>
    );
};

export default Option;
