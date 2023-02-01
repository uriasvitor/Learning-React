import React from "react";
import Container from "../Aside/styles";
import MainHeader from "../MainHeader/index";
import Aside from "../Aside/index";
import Content from "../Content/index";


const Layout: React.FC = ()=>{

    return(
        <Container>
            <MainHeader/>
            <Aside/>
            <Content/>
        </Container>
    )
}

export default Layout;