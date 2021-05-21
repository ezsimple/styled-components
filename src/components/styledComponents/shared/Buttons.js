import React from 'react';
import styled, {css} from 'styled-components';
import {color, activeColor} from '../Properties'
import {getValue} from '../Util'
import {margin, padding, sticky, fixed, noti, notiNew, pseudo} from '../CoreStyles'


const BasicButton = styled.button`
    box-sizing: border-box;
    padding: 0 6px;
    height: 40px;

    display: ${props => props.display || 'inline-block'};   
    color: ${props => color[props.fg] || 'inherit'};
    background-color: ${props => props.bg ? `${color[props.bg]}` : `${color.white}`};  
    border: ${props => props.bc ? `1px solid ${color[props.bc]}` : '0'};
    font-size: ${props => props.fontSize ? `${getValue(props.fontSize)}` : `inherit`};
    text-decoration: ${props => props.textDecoration || 'none'};
    cursor: ${props => props.cursor || 'pointer'};   

    ${margin};
    ${padding};
    width: ${props => getValue(props.width)};
    ${props => props.height && css`height: ${getValue(props.height)};`}
    ${props => props.bold && css`font-weight: bold;`}
    border-radius: ${props => getValue(props.rounded) || getValue(5)}!important;
    ${props => props.block && css`width: 100%;`}
    ${props => props.shadow && css`box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.07);`}

    ${props => props.noti && noti};
    ${props => props.notiNew && notiNew};
    ${pseudo.hover};
    ${pseudo.active};
`;


//override
export const Button = styled(BasicButton)`    

    ${props => props.disabled && css`
        pointer-events: none;
        background-color: ${color.secondary}!important;
        color: ${color.white}!important;        
        border: 0;
    `};
    &:focus{
        outline: none;
    };
`;