import styles from "./page.module.css";

export default function SignupForm() {
    return (
        <section className={styles.authSection}>
            <div className={styles.authCard}>
                <h2 className={styles.heading}>Create Account</h2>
                <p className={styles.subtext}>
                    Join us and start your journey!
                </p>

                <form
                    action="/api/signup"
                    method="POST"
                    className={styles.form}
                >
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

                <p className={styles.toggleText}>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
}
