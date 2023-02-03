import React from "react";
import Container from "../Aside/styles";
import MainHeader from "../MainHeader/index";
import Aside from "../Aside/index";
import Content from "../Content/index";
import { Grid } from "./styles";

const Layout: React.FC = ()=>{

    return(
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content/>
        </Grid>
    )
}

export default Layout;