import React from "react";
import {Container} from "../Aside/styles";
import MainHeader from "../MainHeader/index";
import Aside from "../Aside/index";
import Content from "../Content/index";
import { Grid } from "./styles";

interface childrenProp{
    children?:React.ReactNode
};

const Layout: React.FC<childrenProp> = ({children})=>{

    return(
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </Grid>
     )
}

export default Layout;