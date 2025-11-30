// src/components/RecoveryTimeline.tsx
import type { RecoveryStep } from "../../data/recoveryStepsTimeline";
import "../../styles/recoveryStepsTimeline.css";

interface Props {
    steps: RecoveryStep[];
}

const RecoveryTimeline = ({ steps }: Props) => {
    return (
        <div className="recovery-timeline">
            {steps.map((step, index) => (
                <div key={step.id} className="timeline-item">
                    <div className="timeline-marker">
                        <span className="timeline-number">{index + 1}</span>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <h3>{step.phase}</h3>
                            <span className="timeline-duration">{step.duration}</span>
                        </div>
                        <p className="timeline-description">{step.description}</p>
                        <ul className="timeline-tasks">
                            {step.tasks.map((task, idx) => (
                                <li key={idx}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecoveryTimeline;
