import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((value: string) => (
                <Form.Check
                    key={value + "_button"}
                    inline
                    type="radio"
                    name="response"
                    onChange={(e) => setColor(e.target.value)}
                    id={"color-" + value}
                    label={
                        <div style={{ backgroundColor: value }}>{value}</div>
                    }
                    value={value}
                    checked={color === value}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
