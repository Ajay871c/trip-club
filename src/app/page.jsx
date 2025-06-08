"use client";
import React from "react";
import styles from "./page.module.css";
import Option from "@/components/option/Option";
import MemberShip from "@/components/memberShip/MemberShip";
import Testimonials from "@/components/testimonials/Testimonials";
import Features from "@/components/features/Features";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GreekGetaways from "@/components/GreekGetaways/GreekGetaways";
import FAQ from "@/components/faq/FAQ";
import TikTokVideos from "@/components/tictik/Tictok";

const cards = [
    {
        id: 1,
        title: "Greek Gataways",
        desc: "Campus Group Trips",
        svg: "/1.png",
        ani: "fade-up-right",
    },
    {
        id: 2,
        title: "Boss Babe Retreats",
        desc: "Career Driven Escapes",
        svg: "/2.png",
        ani: "fade-up",
    },
    {
        id: 3,
        title: "Wellness Wanderers",
        desc: "Yoga and Spa escapes",
        svg: "/3.png",
        ani: "fade-up-left",
    },
    {
        id: 4,
        title: "Culture Collective",
        desc: "City Immersion",
        svg: "/1.png",
        ani: "fade-up-right",
    },
    {
        id: 5,
        title: "Adrenalline Allstars",
        desc: "Outdoor Adventures",
        svg: "/2.png",
        ani: "fade-up",
    },
    {
        id: 6,
        title: "Solo Sisters",
        desc: "Trips for Solo Travellers",
        svg: "/3.png",
        ani: "fade-up-left",
    },
];

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);
    return (
        <>
            <div className={styles.hero}>
                <div className="container">
                    <div className={styles.heroCard}>
                        <h1 className={styles.title}>
                            <span className={styles.colored}>No</span>{" "}
                            Boyfriends.{" "}
                            <span className={styles.colored}>No</span> Stress.
                        </h1>
                        <p className={styles.desc}>
                            Just Girls, Getaways & Good Vibes
                        </p>
                        <a href="/" className="btn">
                            Join the Club
                        </a>
                        <img
                            src="/img.png"
                            alt="decor"
                            className={styles.heroImage}
                        />
                    </div>
                    <div className={styles.offerSec} id="about">
                        <h2 className={styles.offerSecTitle}>
                            Explore by vive
                        </h2>
                        <div className={styles.cards}>
                            {cards.map((item) => (
                                <div
                                    className={styles.card}
                                    key={item.id}
                                    data-aos={item.ani}
                                >
                                    <h3 className={styles.cardTitle}>
                                        {item.title}
                                    </h3>
                                    <small className={styles.cardDesc}>
                                        {item.desc}
                                    </small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <TikTokVideos />
            </div>
            <div className="container">
                <GreekGetaways />
            </div>
            <div className="container">
                <Option />
            </div>
            <div className="container">
                <MemberShip />
            </div>
            <div className="container">
                <Testimonials />
            </div>
            <div className="container">
                <Features />
            </div>
            <div className="container">
                <FAQ />
            </div>
        </>
    );
};

export default Home;
