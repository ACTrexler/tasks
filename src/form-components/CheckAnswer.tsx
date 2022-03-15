import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateGivenAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={updateGivenAnswer}
                />
            </Form.Group>
            {givenAnswer === expectedAnswer && <div>✔️</div>}
            {givenAnswer !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
