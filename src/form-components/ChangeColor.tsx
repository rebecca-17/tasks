import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "indigo",
        "pink",
    ];

    const [color, setColor] = useState<string>(colors[0]);

    function changeColor(e: React.ChangeEvent<HTMLInputElement>) {
        setColor(e.target.value);
    }
    return (
        <div>
            <div>
                {colors.map((c: string) => (
                    <Form.Check
                        inline
                        key={c}
                        type="radio"
                        name="color-options"
                        label={c}
                        value={c}
                        checked={color === c}
                        onChange={changeColor}
                    />
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                }}
            >
                {color}
            </div>
        </div>
    );
}
