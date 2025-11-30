import type { ChangeEvent } from "react";

type Question = {
    id: number;
    title: string;
    description: string;
};

type Props = {
    question: Question;
    value: string;
    onChange: (val: string) => void;
};

const QuestionBlock = ({ question, value, onChange }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="question-block" >
            <h2>{question.title} </h2>
            {question.description && <p>{question.description} </p>}
            <textarea value={value} onChange={handleChange} rows={3} />
        </div>
    );
};

export default QuestionBlock;