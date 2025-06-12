import Image from "next/image";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default function DashboardPage() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    let user = null;

    if (token) {
        try {
            user = jwt.verify(token, process.env.JWT_SECRET || "yoursecretkey");
            console.log("Decoded user:", user);
        } catch (err) {
            console.error("Invalid token");
        }
    }

    if (!user) {
        return (
            <div className={styles.notLoggedIn}>
                <h2>You must be logged in to view this page.</h2>
                <a href="/login">Go to Login</a>
            </div>
        );
    }

    // Dummy subscription details — you can fetch from DB
    const subscription = {
        plan: "Premium",
        price: "$2,999/mo",
        status: "Active",
        since: "March 2024",
    };

    return (
        <section className={styles.dashboard}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Your Dashboard</h1>

                <div className={styles.profileCard}>
                    <div className={styles.left}>
                        <div>
                            <h2 className={styles.name}>
                                {user.name || "username"}
                            </h2>
                            <p className={styles.email}>{user.email}</p>
                            <form action="/api/auth/logout" method="POST">
                                <button
                                    type="submit"
                                    className={styles.logoutBtn}
                                >
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <h3>Subscription</h3>
                        <p>
                            <strong>Plan:</strong> {subscription.plan}
                        </p>
                        <p>
                            <strong>Price:</strong> {subscription.price}
                        </p>
                        <p>
                            <strong>Status:</strong> {subscription.status}
                        </p>
                        <p>
                            <strong>Subscribed since:</strong>{" "}
                            {subscription.since}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
