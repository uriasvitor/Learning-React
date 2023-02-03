import { ReactSwitchProps } from 'react-switch';
import Switch from 'react-switch';
import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
`;

export const ToggleLabel = styled.div`
color: ${props => props.theme.colors.white}`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme})=>({
        onColor:theme.colors.info,
        offColor:theme.colors.warning,
}))`
    margin: 10px;
`;