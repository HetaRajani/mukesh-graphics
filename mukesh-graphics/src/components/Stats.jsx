function Stats() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "120+", label: "Brands Served" },
    { number: "20+", label: "Design Awards" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section style={styles.section}>
      {stats.map((item, index) => (
        <div key={index} style={styles.card}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 40px",
    background: "#111827",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  card: {
    width: "220px",
    padding: "35px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    textAlign: "center",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
};

export default Stats;