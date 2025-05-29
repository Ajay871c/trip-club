import styles from "./page.module.css";

const plans = [
    {
        title: "Standard",
        price: "$999",
        period: "/mo",
        description:
            "Experience the excellence of our services with a handful of small projects.",
        features: [
            "One request at a time",
            "Two weeks design sprint",
            "Unlimited requests & revisions",
            "Up to 1 meeting per week",
            "Dev ready Figma files",
            "Unlimited Stock Photos",
        ],
        button: "Get Started",
    },
    {
        title: "Premium",
        price: "$2,999",
        period: "/mo",
        description:
            "Ideal for burgeoning startups seeking continuous design assistance.",
        features: [
            "One request at a time",
            "3 - 5 business days delivery",
            "Unlimited requests & revisions",
            "Up to 1 meeting per week",
            "Dev ready Figma files",
            "Unlimited Stock Photos",
        ],
        button: "Get Started",
        popular: true,
    },
    {
        title: "Premium +",
        price: "$3,499",
        period: "/mo",
        description:
            "Ideal choice for agencies that are committed to providing top-notch service to their clients.",
        features: [
            "Two request at a time",
            "3 - 5 business days delivery",
            "Unlimited requests & revisions",
            "Flexible weekly meetings",
            "Dev ready Figma files",
            "Unlimited Stock Photos",
        ],
        button: "Get Started",
    },
];

export default function SubscriptionPlans() {

    return (
        <section className={styles.plansSection}>
            <div className={styles.container}>
                {plans.map((plan, idx) => (
                    <div
                        className={`${styles.card} ${
                            plan.popular ? styles.popular : ""
                        }`}
                        key={plan.title}
                    >
                        <h3 className={styles.title}>{plan.title}</h3>
                        {plan.popular && (
                            <span className={styles.badge}>POPULAR</span>
                        )}
                        <p className={styles.description}>{plan.description}</p>
                        <div className={styles.price}>
                            <span>{plan.price}</span>
                            <small>{plan.period}</small>
                        </div>
                        <p className={styles.note}>
                            Pause or cancel anytime. <br /> 7 days money-back
                            guarantee
                        </p>
                        <ul className={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i}>✔ {feature}</li>
                            ))}
                        </ul>
                        <button className={styles.button}>{plan.button}</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
