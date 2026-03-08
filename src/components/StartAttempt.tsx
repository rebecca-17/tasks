import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [num, setNum] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function upAttempts(): void {
        setNum(num + 1);
    }

    function startQuiz(): void {
        setProgress(true);
        setNum(num - 1);
    }

    function stopQuiz(): void {
        setProgress(false);
    }
    return (
        <div>
            <div>Attempts: {num}</div>

            <Button onClick={startQuiz} disabled={progress || num === 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>

            <Button onClick={upAttempts} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
