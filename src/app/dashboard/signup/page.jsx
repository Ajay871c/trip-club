"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function SignupForm() {
    const [message, setMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setMessage(data.message);

        if (response.ok) {
            // Redirect to login page after successful signup
            window.location.href = "/dashboard/login";
        }
    }

    return (
        <section className={styles.authSection}>
            <div className={styles.authCard}>
                <h2 className={styles.heading}>Create Account</h2>
                <p className={styles.subtext}>
                    Join us and start your journey!
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Sign Up
                    </button>
                </form>

                {message && (
                    <p
                        className={
                            message.toLowerCase().includes("success")
                                ? styles.successMessage
                                : styles.errorMessage
                        }
                    >
                        {message}
                    </p>
                )}

                <p className={styles.toggleText}>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
}
