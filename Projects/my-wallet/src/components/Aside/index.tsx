import React from "react";
import {Container, Header, LogoImg, MenuContainer, MenuItemLink, Title} from "./styles";
import {MdDashboard, MdArrowDownward,MdArrowUpward,MdExitToApp} from 'react-icons/md'
import logoImg from '../../assets/logo.svg'

const Aside: React.FC = ()=>{
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="A logo da sua Carteira"></LogoImg>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard></MdDashboard>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward></MdArrowDownward>
                    Depositos
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward></MdArrowUpward>
                    Saques
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp></MdExitToApp>
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>
    )
}

export default Aside;