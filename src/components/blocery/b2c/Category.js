import React from 'react'; 
import {Div, Right, Flex, Span, Img, Sticky, Fixed} from '../../styledComponents/shared/Layouts'
import {Button} from '../../styledComponents/shared/Buttons'
import {Header} from '../../styledComponents/mixedIn/Headers'
import {HrThin, HrHeavy, HrHeavyX2} from '../../styledComponents/mixedIn/Hrs'

import styled, {css} from 'styled-components'

const margin = 33

const FlexItem = styled(Flex)`
    @media (max-width: 768px) {
        width: calc(100% / 6);
    }
    @media (max-width: 411px) {
        width: calc(100% / 5);
    }
`;

const Slide = styled(Div)`
    width: 247px;
`;


//구매완료 페이지
export default function(){
    return(
        <>
        
        <Flex justifyContent='center' m={margin}>
            <Div textAlign='center' mr={margin}>
                <Button bg={'green'} width={69} height={69} shadow mb={6}></Button>
                <Div>기획전</Div>
            </Div>
            <Div textAlign='center' mr={margin}>
                <Button bg={'white'} width={69} height={69} shadow mb={6}></Button>
                <Div>베스트</Div>
            </Div>
            <Div textAlign='center'>
                <Button bg={'white'} width={69} height={69} shadow mb={6}></Button>
                <Div>신상품</Div>
            </Div>
        </Flex>
        <HrThin/>
dffsd

        <HrHeavyX2 bc='background'/>
        <Div>
            <Div fontSize={16} bold m={16} mt={30}>
                카테고리
            </Div>
            <Div m={16} mb={25} mb={30}>
                <Flex flexWrap='wrap'>
                    {
                        [...Array(18)].map(item => 
                            <FlexItem column justifyContent='center' height={70} cursor>
                                <Div mb={5} bg='green' width={40} height={40}>icon</Div>
                                <Div fontSize={12} bg='danger'>채소</Div>
                            </FlexItem>
                        )
                    }
                </Flex>
            </Div>
            <HrThin bc='light'/>
            
            
        </Div>

        <Div mt={32} mb={32}>
            <Div fontSize={16} bold ml={16}>
                진행중인 기획전
            </Div>
            {/* swipe space start */}
            <Slide width={250} height={250} ml={16}>
                <Div>
                    img..
                </Div>
            </Slide>
            <Slide width={250} height={250}>
                <Div>
                    img..
                </Div>
            </Slide>
            <Slide width={250} height={250} mr={18}>
                <Div>
                    img..
                </Div>
            </Slide>
            {/* swipe space end */}
        </Div>

        
        </>
    )
}