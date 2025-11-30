export interface StatItem {
    id: number;
    value: string;
    label: string;
    description: string;
}

export const statistics: StatItem[] = [
    {
        id: 1,
        value: "70%",
        label: "Снижение рисков",
        description: "При своевременном обращении за помощью"
    },
    {
        id: 2,
        value: "24/7",
        label: "Поддержка",
        description: "Круглосуточная анонимная помощь"
    },
    {
        id: 3,
        value: "3-6 месяцев",
        label: "Восстановление",
        description: "Средний срок базовой реабилитации"
    },
    {
        id: 4,
        value: "85%",
        label: "Эффективность",
        description: "При комплексном подходе к восстановлению"
    }
];
