import React, { useState } from "react";
import styles from "./faq.module.css"

const faqs = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund. Items must be unused and in original packaging.",
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs vary depending on the destination.",
    },
    {
        question: "How can I track my order?",
        answer: "After placing an order, you'll receive a tracking link via email once your order is shipped.",
    },
    {
        question: "Can I cancel or change my order?",
        answer: "Orders can be modified or canceled within 2 hours of placement. Contact our support team for assistance.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div className={styles.faqItem} key={index}>
                        <button
                            className={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className={styles.faqIcon}>
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className={styles.faqAnswer}>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
