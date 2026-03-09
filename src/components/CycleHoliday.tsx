import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type holiday =
    | "christmas"
    | "halloween"
    | "stPaddys"
    | "thanksgiving"
    | "fourthOfJuly";

export function CycleHoliday(): React.JSX.Element {
    const holidayEmoji: Record<holiday, string> = {
        christmas: "🎄",
        halloween: "🎃",
        stPaddys: "🍀",
        thanksgiving: "🦃",
        fourthOfJuly: "🎆",
    };

    const alphabetOrder: holiday[] = [
        "christmas",
        "fourthOfJuly",
        "halloween",
        "stPaddys",
        "thanksgiving",
    ];

    const calendarOrder: holiday[] = [
        "stPaddys",
        "fourthOfJuly",
        "halloween",
        "thanksgiving",
        "christmas",
    ];
    const [holiday, setHoliday] = useState<holiday>("christmas");

    function advanceAlphabet(): void {
        const index = alphabetOrder.indexOf(holiday);
        const next = alphabetOrder[(index + 1) % alphabetOrder.length];
        setHoliday(next);
    }

    function advanceYear(): void {
        const index = calendarOrder.indexOf(holiday);
        const next = calendarOrder[(index + 1) % calendarOrder.length];
        setHoliday(next);
    }

    return (
        <div>
            <div>Holiday: {holidayEmoji[holiday]}</div>

            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>

            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
