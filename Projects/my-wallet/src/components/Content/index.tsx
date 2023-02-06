import React from "react";
import {Container} from "../Content/styles";

interface childrenProp{
    children?: React.ReactNode
}

const Content : React.FC<childrenProp> = ({children})=>{

    return(
        <Container>
            {children}
        </Container>
    )
}

export default Content;