import React from 'react';
import { Div, Right, Flex, Span, Img, Sticky, Fixed } from '../../styledComponents/shared/Layouts'
import { Button, A } from '../../styledComponents/shared'
import { Header, HrThin, HrHeavy, HrHeavyX2, Badge } from '../../styledComponents/mixedIn'
import { color } from '../../styledComponents/Properties'
import styled, { css } from 'styled-components'
import {getValue} from '../../styledComponents/Util'

const Answer = styled(Div)`
    font-size: ${getValue(12)};
    line-height: ${getValue(18)};
    background-color: ${color.background};
    padding: ${getValue(10)} ${getValue(31)};
    border-bottom: 1px solid ${color.light};    
`;

export default () => {
    return (

        <>

            <Div p={5} display='block' shadow bg='light' target='_blank' textAlign='center' as='a' href='https://app.zeplin.io/project/5e49373a1abc23bad242fe55/screen/5e531f7d27cd32677b10f44f'>zeplin</Div>

            <Flex fontSize={14} m={16}>
                <Div bold>총 <Span fg='green'>41개</Span> 문의</Div>
                <Right>
                    <Button bold bg='white' bc='light' pl={16} pr={16}>상품 문의하기</Button>
                </Right>
            </Flex>

            <Div m={16}>
                <Div mb={7} fontSize={12}>
                    지금까지 먹어본 고구마중에 가장 맛있었던 것 같아요. 다음에 또 먹어봐야겠어요!
                </Div>
                <Flex fontSize={10} mb={10}>
                    <Div fg='secondary'>email****@email.com | 2시간 전</Div>
                    <Right>
                        <Badge fg='white' bg='green'>답변완료</Badge>
                    </Right>
                </Flex>

                <HrThin/>

                <Answer>
                    <Div mb={4} fg='adjust'>판매자 답변</Div>
                    <Div mb={7}>배송중에 싹이 난 고구마는 확인 후 바로 교환해드리고 있습니다. 문제가 되는 상품을 찍어서 보내주시면 확인 후 배송해드릴 예정입니다. 감사합니다.</Div>
                    <Div fontSize={10} fg='secondary'>2시간 전</Div>
                </Answer>

            </Div>

            <Div m={16}>
                <Div mb={7} fontSize={12}>
                    지금까지 먹어본 고구마중에 가장 맛있었던 것 같아요. 다음에 또 먹어봐야겠어요!
                </Div>
                <Flex fontSize={10} mb={10}>
                    <Div fg='secondary'>email****@email.com | 2시간 전</Div>
                    <Right>
                        <Badge fg='dark' bg='white' bc='light'>대기</Badge>
                    </Right>
                </Flex>

                <HrThin/>


            </Div>


        </>
    )
}