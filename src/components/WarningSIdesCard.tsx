// src/components/WarningSignsCard.tsx
import type { WarningSigns } from "../../data/warningSigns";
import "../../styles/warningSidesCard.css";

interface Props {
    data: WarningSigns;
}

const WarningSignsCard = ({ data }: Props) => {
    return (
        <div className="warning-card">
            <div className="warning-card-header">
                {data.icon && <span className="warning-icon">{data.icon}</span>}
                <h3>{data.category}</h3>
            </div>
            <ul className="warning-signs-list">
                {data.signs.map((sign, index) => (
                    <li key={index}>{sign}</li>
                ))}
            </ul>
        </div>
    );
};

export default WarningSignsCard;
