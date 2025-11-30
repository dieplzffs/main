// src/components/StatsGrid.tsx
import StatsCard from "./StatsCard";
import type { StatItem } from "../../data/statistics";
import "./StatsGrid.css";

interface Props {
    items: StatItem[];
}

const StatsGrid = ({ items }: Props) => {
    return (
        <div className="stats-grid">
            {items.map(item => (
                <StatsCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default StatsGrid;
