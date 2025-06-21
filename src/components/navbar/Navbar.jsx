"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Menu, X } from "lucide-react";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userName, setUserName] = useState(null);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const getUser = () => {
            try {
                const token = document.cookie
                    .split("; ")
                    .find((row) => row.startsWith("token="))
                    ?.split("=")[1];

                if (token) {
                    const decoded = jwtDecode(token);
                    console.log("Decoded JWT:", decoded.name);
                    setUserName(decoded.name || decoded.email);
                }
                else{
                    console.log("notokeb");
                    
                }
            } catch (err) {
                console.error("Invalid token");
            }
        };

        getUser();
    }, []);

    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.logo}>
                Girls Trip Club
            </a>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul
                className={`${styles.navLinks} ${
                    isMobileMenuOpen ? styles.showMenu : ""
                }`}
            >
                <li className={styles.navLink}>
                    <a href="/">Home</a>
                </li>
                <li className={styles.navLink}>
                    <a href="#about">About</a>
                </li>
                <li className={styles.navLink}>
                    <a href="#trip">Trip</a>
                </li>
                <li className={styles.navLink}>
                    <a href="/subscription">Membership</a>
                </li>

                {userName ? (
                    <li className={styles.navAuthLink1}>
                        <a href="/dashboard">{userName}</a>
                    </li>
                ) : (
                    <>
                        <li className={styles.navAuthLink1}>
                            <a href="/dashboard/login">Login</a>
                        </li>
                        <li className={styles.navAuthLink2}>
                            <a href="/dashboard/signup">Signup</a>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
