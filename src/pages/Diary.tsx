import { useState } from "react";
import { questions } from "../../data/questions";
import QuestionBlock from "../components/QuestionBlock.tsx";


const Diary = () => {
    const [answers, setAnswers] = useState<Record<number, string>>({});


    const update = (id: number, val: string) => {
        setAnswers((p) => ({ ...p, [id]: val }));
    };


    const exportDiary = () => {
        const content = questions
            .map((q) => `${q.id}. ${q.title}
${answers[q.id] || ""}
`)
            .join("");


        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "diary.txt";
        a.click();
        URL.revokeObjectURL(url);
    };


    return (
        <div className="container">
            <h1>Дневник</h1>
            {questions.map((q) => (
                <QuestionBlock
                    key={q.id}
                    question={q}
                    value={answers[q.id] || ""}
                    onChange={(v: string) => update(q.id, v)}
                />
            ))}
            <button onClick={exportDiary}>Скачать дневник</button>
        </div>
    );
};


export default Diary;