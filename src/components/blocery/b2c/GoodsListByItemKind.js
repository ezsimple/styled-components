import React from 'react'; 
import {Div, Right, Flex, Span, Button, Img, Sticky, Fixed} from '../../styledComponents/shared'
import {Header, HrThin, HrHeavy, HrHeavyX2, VLine} from '../../styledComponents/mixedIn'
import {getValue} from '../../styledComponents/Util'
import {color} from '../../styledComponents/Properties'

import styled, {css} from 'styled-components'

const SortHeader = styled(Flex)`
    margin: ${getValue(16)} ${getValue(20)};
`;

const SortItemBox = styled(Flex)`
    cursor: pointer;
    margin-left: auto;
    align-items: center;
    font-size: ${getValue(14)};
    & > div:last-child{
        border-right: 0;
        padding-right: 0;
    }
`;

const SortItem = styled(Flex)`
    color: ${color.dark};
    padding-right: ${getValue(12)};
    line-height: ${getValue(14)};
    display: flex;
    align-items: center;
    & > div:nth-child(2){
        padding-left: 6px;  //아이콘 오른쪽 텍스트문구
    }
    ${props => !props.noLine && css`
        &::after{
            content: "";
            display: inline-block;
            width: 1px;
            height: 14px;
            background-color: ${color.light};
            margin-left: 12px;
            
        }
    `};
`;

//구매완료 페이지
export default function(){
    return(
        <>
            <SortHeader>
                <Div fontSize={18} bold><Span fg='green'>42개</Span> 상품</Div>
                <SortItemBox>
                    <SortItem>
                        <Div>ii</Div>    
                        <Div>예약상품</Div>
                    </SortItem>
                    <SortItem>
                    <Div>ii</Div>    
                        <Div>예약상품</Div>
                    </SortItem>
                    <SortItem noLine>
                        <Div>ii</Div>    
                    </SortItem>
                    {/* <Div>ii</Div>
                    <Div lineHeight={14} bc='light' bt={0} bb={0} bl={0} br={1} pr={12}>예약상품</Div>
                    <Div pl={12}>최신순</Div>
                    <Div>ii</Div> */}
                </SortItemBox>
            </SortHeader>


            <Fixed top={80} width='100%' height='100vh' bg='dark'>
                <Div bg='white' pt={22 - (19/2)} pb={22 - (19/2)}>
                    <Div cursor fontSize={16} fg='green' bold p={19/2} textAlign='center'>전체보기</Div>
                    <Div cursor fontSize={16} fg='dark' p={19/2} textAlign='center'>기본채소</Div>
                    <Div cursor fontSize={16} fg='dark' p={19/2} textAlign='center'>쌈/샐러드/간편채소</Div>
                    <Div cursor fontSize={16} fg='dark' p={19/2} textAlign='center'>브로콜리/특수채소</Div>
                </Div>
            </Fixed>
        </>
    )
}