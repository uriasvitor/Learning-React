import styled from "styled-components";


interface IContainerProps {
    color:string
}

interface ITagProps {
    color:string
}

export const Container = styled.li<IContainerProps>`
    background-color:${props => props.color};

    list-style:none;
    border-radius: 10px;

    margin: 10px 0;
    padding: 12px 10px;

    cursor:pointer;
    transition: all 0.3s;

    display:flex;
    justify-items: space-between;
    align-items: center;

    position:relative;

    &:hover{
        opacity: 0.7;
        transform: translateX(10px)
    }

    > div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
`;

export const Tag = styled.div`

    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;