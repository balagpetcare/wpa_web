import type { TimelineStep } from "../../lib/pagesContent";

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="timeline">
      {steps.map((step) => (
        <div key={step.number} className="timeline__step">
          <p className="timeline__number">STEP {step.number}</p>
          <h3 className="timeline__title">{step.title}</h3>
          <p className="timeline__desc">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
