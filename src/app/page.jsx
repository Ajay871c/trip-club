"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Option from "@/components/option/Option";
import MemberShip from "@/components/memberShip/MemberShip";
import Testimonials from "@/components/testimonials/Testimonials";
import Features from "@/components/features/Features";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GreekGetaways from "@/components/GreekGetaways/GreekGetaways";

const cards = [

    {
        id: 1,
        title: "Curated Trips",
        desc: "Handpicked destinations with all-girl groups and full itineraries",
        svg: '/1.png',
        ani: "fade-up-right"
    },
    {
        id: 2,
        title: "Self-Care & Fun",
        desc: "Balance adventure and wellness with spa days, hikes, and bonding.",
        svg: '/2.png',
        ani: "fade-up"
    },
    {
        id: 3,
        title: "Sisterhood Vibes",
        desc: "Meet like-minded girls and make unforgettable friendships.",
        svg: '/3.png',
        ani: "fade-up-left"
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
                        <span className={styles.colored}>No</span> Boyfriends.{" "}
                        <span className={styles.colored}>No</span> Stress.
                    </h1>
                    <p className={styles.desc}>
                        Just Girls, Getaways & Good Vibes
                    </p>
                    <a href="/" className='btn'>
                        Join the Club
                    </a>
                </div>
                <div className={styles.offerSec} id="about">
                    <h2 className={styles.offerSecTitle}>What We Offer</h2>
                    <div className={styles.cards}>
                    {cards.map((item)=>(
                        <div className={styles.card} key={item.id} data-aos={item.ani}>
                            {/* svg */}
                            <Image src={item.svg} width={95} height={95} />
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <small className={styles.cardDesc}>{item.desc}</small>
                        </div>
                    ))}
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div className="container">
            <GreekGetaways/>
        </div>
        <div className="container">
            <Option/>
        </div>
        <div className="container">
            <MemberShip />
        </div>
        <div className="container">
            <Testimonials/>
        </div>
        <div className="container">
            <Features/>
        </div>
        </>
    );
};

export default Home;
