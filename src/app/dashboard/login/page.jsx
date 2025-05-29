import styles from "./page.module.css";

export default function LoginForm() {
    return (
        <section className={styles.authSection}>
            <div className={styles.authCard}>
                <h2 className={styles.heading}>Welcome Back</h2>
                <p className={styles.subtext}>Login to continue</p>

                <form action="/api/login" method="POST" className={styles.form}>
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

                <p className={styles.toggleText}>
                    Don’t have an account? <a href="/dashboard/signup">Sign Up</a>
                </p>
            </div>
        </section>
    );
}
