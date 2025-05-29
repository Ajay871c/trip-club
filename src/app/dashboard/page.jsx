import Image from "next/image";
import styles from "./page.module.css";

export default function DashboardPage() {
    // Example: you would fetch real user data here with cookies/session
    const user = {
        name: "Jane Doe",
        email: "jane@example.com",
        profileImage: "/profile.jpg",
        subscription: {
            plan: "Premium",
            price: "$2,999/mo",
            status: "Active",
            since: "March 2024",
        },
    };

    return (
        <section className={styles.dashboard}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Your Dashboard</h1>

                <div className={styles.profileCard}>
                    <div className={styles.left}>
                        <Image
                            src={user.profileImage}
                            alt="Profile"
                            width={100}
                            height={100}
                            className={styles.avatar}
                        />
                        <div>
                            <h2 className={styles.name}>{user.name}</h2>
                            <p className={styles.email}>{user.email}</p>
                            <button className={styles.editBtn}>
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <h3>Subscription</h3>
                        <p>
                            <strong>Plan:</strong> {user.subscription.plan}
                        </p>
                        <p>
                            <strong>Price:</strong> {user.subscription.price}
                        </p>
                        <p>
                            <strong>Status:</strong> {user.subscription.status}
                        </p>
                        <p>
                            <strong>Subscribed since:</strong>{" "}
                            {user.subscription.since}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
