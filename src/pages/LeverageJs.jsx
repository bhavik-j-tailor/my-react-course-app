import React from "react";
import { people } from "../data";

export default function LeverageJs() {
    return (
        <div>
            {
                people.map((person) => {
                    return <div key={person.id}>{person.name}</div>
                }
                )
            }
        </div>
    )

}