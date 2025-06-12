"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function LoginForm() {
    const [message, setMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const response = await fetch("/api/auth/signin", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setMessage(data.message);

        if (response.ok) {
            // Redirect to dashboard or home after successful login
            window.location.href = "/dashboard";
        }
    }

    return (
        <section className={styles.authSection}>
            <div className={styles.authCard}>
                <h2 className={styles.heading}>Welcome Back</h2>
                <p className={styles.subtext}>Login to continue</p>

                <form onSubmit={handleSubmit} className={styles.form}>
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
                        Login
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
                    Don’t have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </section>
    );
}
