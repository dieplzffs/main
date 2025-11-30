// src/components/HelpSection.tsx
import type { HelpResource } from "../../data/helpResource";
import "../../styles/helpSection.css";

interface Props {
    resources: HelpResource[];
}

const HelpSection = ({ resources }: Props) => {
    const getIcon = (type: HelpResource['type']) => {
        switch (type) {
            case 'phone': return '📞';
            case 'online': return '💬';
            case 'in-person': return '🏥';
            default: return '📋';
        }
    };

    const getButtonText = (type: HelpResource['type']) => {
        switch (type) {
            case 'phone': return 'Позвонить';
            case 'online': return 'Начать чат';
            case 'in-person': return 'Записаться';
            default: return 'Подробнее';
        }
    };

    return (
        <div className="help-resources-grid">
            {resources.map((resource) => (
                <div key={resource.id} className="help-card">
                    <div className="help-card-header">
                        <span className="help-icon">{getIcon(resource.type)}</span>
                        <span className="help-availability">{resource.available}</span>
                    </div>
                    <h3 className="help-title">{resource.title}</h3>
                    <p className="help-description">{resource.description}</p>
                    <div className="help-footer">
                        <span className="help-contact">{resource.contact}</span>
                        <button className="help-button">
                            {getButtonText(resource.type)}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HelpSection;
