import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questiontype, setQType] = useState<QuestionType>(
        "short_answer_question",
    );

    function flipType(): void {
        setQType(
            questiontype === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {questiontype === "multiple_choice_question" && (
                <span>Multiple Choice</span>
            )}
            {questiontype === "short_answer_question" && (
                <span>Short Answer</span>
            )}
        </div>
    );
}
