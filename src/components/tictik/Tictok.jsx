import styles from "./TikTokVideos.module.css";
import Image from "next/image";

export const tikTokVideos = [
    {
        id: 1,
        title: "Greek Island Vibes",
        thumbnail: "/profile.jpg",
    },
    {
        id: 2,
        title: "Sunset Yacht Tour",
        thumbnail: "/profile.jpg",
    },
    {
        id: 3,
        title: "Mykonos Night Out",
        thumbnail: "/profile.jpg",
    },
    {
        id: 4,
        title: "Athens Street Food",
        thumbnail: "/profile.jpg",
    },
    {
        id: 5,
        title: "Beach Yoga Flow",
        thumbnail: "/profile.jpg",
    },
];

export default function TikTokVideos() {
    return (
        <section className={styles.section} id="tiktok">
            <h2 className={styles.heading}>TikTok Highlights</h2>
            <div className={styles.videoScroll}>
                {tikTokVideos.map((video) => (
                    <div key={video.id} className={styles.card}>
                        <Image
                            src={video.thumbnail}
                            alt={video.title}
                            width={200}
                            height={300}
                            className={styles.image}
                        />
                        <p className={styles.title}>{video.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
