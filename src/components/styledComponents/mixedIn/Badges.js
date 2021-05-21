import React from 'react';
import styled, {css} from 'styled-components';
import {color, activeColor} from '../Properties'
import {Div, Link} from '../shared'
import {getValue}  from '../Util'

export const Badge = styled(Div)`
    font-size: ${getValue(10)};
    border-radius: ${props => getValue(props.rounded) || getValue(4)}; 
    padding: 2px 5px;     
`;