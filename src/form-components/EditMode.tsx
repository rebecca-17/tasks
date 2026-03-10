import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function changeEdit(e: React.ChangeEvent<HTMLInputElement>) {
        setEdit(e.target.checked);
    }

    function changeStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setStudent(e.target.checked);
    }

    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Name"
                checked={edit}
                onChange={changeEdit}
            />

            {edit ?
                <div>
                    <Form.Group controlId="nameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={changeName} />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student?"
                        checked={student}
                        onChange={changeStudent}
                    />
                </div>
            :   <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
