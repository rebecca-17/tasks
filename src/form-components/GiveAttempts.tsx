import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    function decreaseAttempts() {
        setAttempts(attempts - 1);
    }

    function addRequests() {
        const amount = parseInt(requests);
        if (!isNaN(amount)) {
            setAttempts(attempts + amount);
        }
    }

    function changeRequests(e: React.ChangeEvent<HTMLInputElement>) {
        setRequests(e.target.value);
    }
    return (
        <div>
            <div>Attempts Left: {attempts}</div>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={changeRequests}
                />
            </Form.Group>

            <Button onClick={decreaseAttempts} disabled={attempts === 0}>
                Use
            </Button>

            <Button onClick={addRequests}>Gain</Button>
        </div>
    );
}
