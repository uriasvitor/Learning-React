import styled from "styled-components";


interface IContainerProps{
    lineColor:string;
}

export const Container = styled.div`
    width:100%;
    
    display:flex;
    justify-content: space-between;

    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<IContainerProps>`
    > h1{
        color: ${props => props.theme.colors.white};

        &::before{
            content:'';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.theme.colors.warning}
        }
    }
    
`;

export const Controllers = styled.div`
    display:flex;
    flex-direction: row;

    button{
        margin:0 5px;
    }
`;