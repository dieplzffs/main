// src/data/helpResources.ts
export interface HelpResource {
    id: number;
    title: string;
    description: string;
    contact: string;
    available: string;
    type: 'phone' | 'online' | 'in-person';  // Add this line
}

export const helpResources: HelpResource[] = [
    {
        id: 1,
        title: "Горячая линия психологической помощи",
        description: "Анонимная поддержка в кризисных ситуациях",
        contact: "8-800-XXX-XX-XX",
        available: "Круглосуточно",
        type: 'phone'  // Add this line
    },
    {
        id: 2,
        title: "Консультация нарколога",
        description: "Профессиональная медицинская помощь",
        contact: "Запись через форму",
        available: "Пн-Пт: 9:00-18:00",
        type: 'in-person'  // Add this line
    },
    {
        id: 3,
        title: "Группы поддержки",
        description: "Встречи для взаимопомощи",
        contact: "Уточнить расписание",
        available: "По расписанию",
        type: 'in-person'  // Add this line
    }
];
