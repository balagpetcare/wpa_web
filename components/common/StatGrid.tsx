import type { DashboardStat } from "../../lib/impactContent";

export function StatGrid({ items, cardVariant = "" }: { items: DashboardStat[]; cardVariant?: string }) {
  const labelColor = cardVariant.includes("navy") ? "var(--brand-300)" : "var(--brand)";
  return (
    <div className="grid-3">
      {items.map((stat) => (
        <div key={stat.label} className={`card ${cardVariant}`.trim()}>
          <div className="card__icon">
            <span style={{ fontSize: "1.25rem" }}>{stat.icon}</span>
          </div>
          <p style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 4px", color: "inherit" }}>{stat.value}</p>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: labelColor,
              margin: "0 0 8px",
            }}
          >
            {stat.label}
          </p>
          <p className="card__desc">{stat.note}</p>
        </div>
      ))}
    </div>
  );
}
