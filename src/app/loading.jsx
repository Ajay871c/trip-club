export default function Loading() {
    return (
        <div style={styles.wrapper}>
            <div style={styles.spinner}></div>
        </div>
    );
}

const styles = {
    wrapper: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // or your site background
    },
    spinner: {
        width: "40px",
        height: "40px",
        border: "4px solid #ddd",
        borderTop: "4px solid #6366f1", // Indigo color
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
    },
};
