import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button
                disabled={quizInProgress || attempts === 0}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button disabled={!quizInProgress} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button disabled={quizInProgress} onClick={mulligan}>
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
