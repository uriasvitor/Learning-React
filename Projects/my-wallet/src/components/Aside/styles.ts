import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left:20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display:flex;
    align-items:center;

    margin-top:20px;
`;

export const LogoImg = styled.img`
    width:40px;
    height:40px;
`;

export const Title = styled.h3`
   color: ${props => props.theme.colors.white};
   margin-left:10px;
`;
export const MenuContainer = styled.nav`
    display:flex;
    flex-direction:column;
    margin-top:40px;
    color: ${props => props.theme.colors.white};
    text-decoration:none;
`;

export const MenuItemLink = styled.a`
        text-decoration:none;
        color: ${props => props.theme.colors.white};
        margin:20px;
        transition: opacity 0.3s;
        display:flex;
        align-items:center;


        &:hover{
            opacity: 0.7;
        }

        > svg{
            font-size: 30px;
            margin-right: 10px;
        }
`;