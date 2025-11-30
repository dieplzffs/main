// src/components/StatsCard.tsx
import type { StatItem } from "../../data/statistics";
import "./StatsCard.css";

interface Props {
    item: StatItem;
}

const StatsCard = ({ item }: Props) => {
    return (
        <div className="stat-card">
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
            <div className="stat-description">{item.description}</div>
        </div>
    );
};

export default StatsCard;
