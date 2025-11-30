// src/components/MythsFactsSection.tsx
import { useState } from "react";
import type { MythFact } from "../../data/mythsAndFacts";
import "../../styles/mythsFactsSection.css";

interface Props {
    items: MythFact[];
}

const MythsFactsSection = ({ items }: Props) => {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

    const toggleCard = (id: number) => {
        const newFlipped = new Set(flippedCards);
        if (newFlipped.has(id)) {
            newFlipped.delete(id);
        } else {
            newFlipped.add(id);
        }
        setFlippedCards(newFlipped);
    };

    return (
        <div className="myths-facts-grid">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`myth-fact-card ${flippedCards.has(item.id) ? "flipped" : ""}`}
                    onClick={() => toggleCard(item.id)}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <span className="card-label myth-label">МИФ</span>
                            <p className="card-text">{item.myth}</p>
                            <span className="flip-hint">Нажмите для правды →</span>
                        </div>
                        <div className="card-back">
                            <span className="card-label fact-label">ФАКТ</span>
                            <p className="card-text">{item.fact}</p>
                            <span className="flip-hint">← Нажмите для мифа</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MythsFactsSection;
