import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard: React.FC = () =>{
    const options = [{
        value:'rodrigo',label:"Pabito"
    }]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#ffff">
                <SelectInput options={options}/> 
            </ContentHeader>
        </Container>
    )
}

export default Dashboard