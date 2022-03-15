import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [inEditMode, setInEditMode] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function toggleEditMode() {
        setInEditMode(!inEditMode);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Button onClick={toggleEditMode}>Toggle Edit Mode</Button>
            {inEditMode && isStudent && <div>{name} is a student</div>}
            {inEditMode && !isStudent && <div>{name} is not a student</div>}
            {!inEditMode && (
                <div>
                    <Form.Group controlId="formAddAttempts">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            )}
        </div>
    );
}
