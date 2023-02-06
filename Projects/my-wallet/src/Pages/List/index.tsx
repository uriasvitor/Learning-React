import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container,Content } from "./styles";

const List: React.FC = () =>{
    const options = [{
        value:'rodrigo',label:"Pabito"
    }]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#ffff">
                <SelectInput options={options}/> 
            </ContentHeader>

            <Content>
                <HistoryFinanceCard  
                        cardColor="#313862" 
                        tagColor="#E44C4E"
                        title="Conta de Luz"
                        subtitle="27/07/2020"
                        amount="R$ 300"
                    ></HistoryFinanceCard>
            </Content>
        </Container>
    )
}

export default List