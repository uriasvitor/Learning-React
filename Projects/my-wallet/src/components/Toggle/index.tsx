import React, { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";
import Switch from 'react-switch'

const Toggle: React.FC = () =>{
    const [checked, setChecked] = useState(true);

    return (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checkedIcon={false}
            uncheckedIcon={false}
            checked={checked}
            onChange={()=> setChecked(!checked)}
        ></ToggleSelector>
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
    )
}

export default Toggle
