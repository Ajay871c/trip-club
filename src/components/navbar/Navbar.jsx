"use client"
import React, { useState } from "react";
import styles from './navbar.module.css';
import { Menu, X } from 'lucide-react'; // optional: install with `npm i lucide-react`

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.logo}>Girls Trip Club</a>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
                <li className={styles.navLink}><a href="/">Home</a></li>
                <li className={styles.navLink}><a href="#about">About</a></li>
                <li className={styles.navLink}><a href="#trip">Trip</a></li>
                <li className={styles.navLink}><a href="/subscription">Membership</a></li>
                <li className={styles.navAuthLink1}><a href="/dashboard/login">Login</a></li>
                <li className={styles.navAuthLink2}><a href="/dashboard/signup">Signup</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
