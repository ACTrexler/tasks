import React, { useState } from "react";
import { Button } from "react-bootstrap";

const alphabeticalHolidays: string[] = ["🎅", "🐰", "🎃", "🍀", "🦃"];
const chronologicalHolidays: string[] = ["🍀", "🐰", "🎃", "🦃", "🎅"];

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎅");

    function nextAlphabetically(): void {
        const index: number = alphabeticalHolidays.indexOf(holiday);
        setHoliday(alphabeticalHolidays[(index + 1) % 5]);
    }

    function nextChronologically(): void {
        const index: number = chronologicalHolidays.indexOf(holiday);
        setHoliday(chronologicalHolidays[(index + 1) % 5]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextChronologically}>Advance by Year</Button>
        </div>
    );
}
