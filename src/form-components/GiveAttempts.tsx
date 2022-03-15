import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const requested = parseInt(event.target.value, 10);
        if (!isNaN(requested)) {
            setAttemptsRequested(requested);
        } else {
            setAttemptsRequested(0);
        }
    }

    function useAttempt() {
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    function addRequested() {
        setAttemptsRemaining(attemptsRemaining + attemptsRequested);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsRemaining} </div>
            <Button onClick={useAttempt} disabled={attemptsRemaining < 1}>
                use
            </Button>
            <Form.Group controlId="formAddAttempts">
                <Form.Label>Add attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button onClick={addRequested}>gain</Button>
        </div>
    );
}
