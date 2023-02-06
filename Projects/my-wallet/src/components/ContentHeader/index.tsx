import React from "react"
import SelectInput from "../SelectInput";
import { Container,TitleContainer,Controllers } from "./styles"

interface ChildrenProps {
    children: React.ReactNode;
}
   
interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title,lineColor, children
})=>{

    return(
        <Container >
            <TitleContainer lineColor={lineColor}>
                <h1>Titulo</h1>

            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}

export default ContentHeader;