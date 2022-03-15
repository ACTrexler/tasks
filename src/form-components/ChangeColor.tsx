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
                    key="color_buttons"
                    inline
                    type="radio"
                    name="response"
                    onChange={(e) => setColor(e.target.value)}
                    id={"color-" + value}
                    label={<div>{value}</div>}
                    value={value}
                    checked={color === value}
                />
            ))}
            <div>You have chosen</div>
            <div background-color={color}>{color}</div>
            <div>.</div>
        </div>
    );
}
