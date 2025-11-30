// src/data/helpResources.ts
export interface HelpResource {
    id: number;
    title: string;
    description: string;
    contact: string;
    available: string;
    type: 'phone' | 'online' | 'in-person';
}

export const helpResources: HelpResource[] = [
    {
        id: 1,
        title: "Горячая линия психологической помощи",
        description: "Анонимная поддержка в кризисных ситуациях",
        contact: "8-800-XXX-XX-XX",
        available: "Круглосуточно",
        type: 'phone'
    },
    {
        id: 2,
        title: "Консультация нарколога",
        description: "Профессиональная медицинская помощь",
        contact: "Запись через форму",
        available: "Пн-Пт: 9:00-18:00",
        type: 'in-person'
    },
    {
        id: 3,
        title: "Онлайн-консультация",
        description: "Анонимная помощь через чат",
        contact: "Начать чат",
        available: "24/7",
        type: 'online'
    },
    {
        id: 4,
        title: "Группы поддержки",
        description: "Встречи для взаимопомощи",
        contact: "Уточнить расписание",
        available: "По расписанию",
        type: 'in-person'
    }
];
