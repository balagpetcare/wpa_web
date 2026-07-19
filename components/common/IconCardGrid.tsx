import Link from "next/link";
import type { IconCard } from "../../lib/pagesContent";

export function IconCardGrid({
  items,
  columns = 3,
  cardVariant = "",
  hrefBase,
}: {
  items: IconCard[];
  columns?: 2 | 3 | 4 | 6;
  cardVariant?: string;
  hrefBase?: string;
}) {
  return (
    <div className={`grid-${columns}`}>
      {items.map((item) => {
        const href = item.href ?? hrefBase;
        return href ? (
          <Link key={item.title} href={href} className={`card card--hover ${cardVariant}`.trim()}>
            <div className="card__icon">
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
            </div>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__desc">{item.description}</p>
          </Link>
        ) : (
          <div key={item.title} className={`card ${cardVariant}`.trim()}>
            <div className="card__icon">
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
            </div>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__desc">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
