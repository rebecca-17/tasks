import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [option, setOption] = useState<string>(options[0]);

    function changeOption(e: React.ChangeEvent<HTMLSelectElement>) {
        setOption(e.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="multipleChoice">
                    <Form.Label>Choose an answer:</Form.Label>
                    <Form.Select value={option} onChange={changeOption}>
                        {options.map((opt: string) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                {option === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
