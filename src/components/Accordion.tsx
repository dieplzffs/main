import { useState } from "react";
import type { DrugInfo } from "../../data/drugs";
import "../../styles/accordion.css"


interface Props {
    items: DrugInfo[];
}


const Accordion = ({ items }: Props) => {
    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setOpenIds(prev =>
            prev.includes(id)
                ? prev.filter(openId => openId !== id)
                : [...prev, id]
        );
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => toggleItem(item.id)}
                    >
                        {item.name}
                        <span>{openIds.includes(item.id) ? "−" : "+"}</span>
                    </div>

                    <div
                        className={
                            openIds.includes(item.id)
                                ? "accordion-content open"
                                : "accordion-content"
                        }
                    >
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Accordion;