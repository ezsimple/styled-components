import React from 'react'; 
import {Div, Right, Flex, Span, Img, Sticky, Fixed} from '../../styledComponents/shared/Layouts'
import {Button} from '../../styledComponents/shared/Buttons'
import {Header} from '../../styledComponents/mixedIn/Headers'
import {HrThin, HrHeavy} from '../../styledComponents/mixedIn/Hrs'

//구매완료 페이지
export default function(){
    return(
        <>
        <Flex flexDirection="column" justifyContent='center' height={'120px'} bg="white" borderBottom="1">
            <Div fontSize={15} bold>상품 구매가 <Span fg='green'>정상적으로</Span> 완료되었습니다.</Div>
            <Div fontSize={14} fg='dark'>주문번호 : 73000</Div>
        </Flex>
        <Header fontSize={14}>
            <Div bold>상품정보</Div>
            <Right fg='dark'>주문일련번호 : 73000</Right>
        </Header>
        <Flex p={16} bg='white' cursor alignItems='flex-start'>
            <Div width={63} height={63} mr={14} flexShrink={0}>
              <Img cover src="https://img.hankyung.com/photo/201912/01.21032432.1.jpg" alt="" />
            </Div>            
            <Div fontSize={12} fg='dark'>
              <Div mb={7} fontSize={14} fg={'black'}>썬리치 새콤달콤 겨울딸기 특상품 모듬 1kg 산지 직판 직배송</Div>
              <Div>수량 : 1개</Div>
              <Div>금액 : 19,500원 (475.5BLCT)</Div>
              <Div>배송예정 : 구매 후 3일 이내</Div>
            </Div>
        </Flex>
        <Header bold>
            <Div fontSize={14}>최종결제내역</Div>
        </Header>
        
        <Div m={16} mb={30}>
            <Flex mb={7} fontSize={12}>
                <Div fg='adjust'>총 상품가격</Div>
                <Right>
                    17,800원
                </Right>
            </Flex>
            <Flex mb={15} fontSize={12}>
                <Div fg='adjust'>총 배송비</Div>
                <Right>
                    17,800원
                </Right>
            </Flex>
            <HrThin mb={15}/>
            <Flex mb={4} fontSize={16} bold>
                <Div>최종 결제 금액</Div>
                <Right bold fg='green'>17,800 원</Right>
            </Flex>
            <Flex fontSize={12}>
                <Div fg='adjust' bold>1 BLCT = 40원</Div>
                <Right fg='green' bold>487.5 BLCT</Right>
            </Flex>
        </Div>

        <Div height={52}></Div>
        <Fixed bg='green' bottom={0} width='100%' fontSize={16} zIndex={10}>
            <Button fg='white' bg='adjust' bold width={'50%'} height={52} rounded={0}>구매내역 확인</Button>
            <Button fg='white' bg='green' bold width={'50%'} height={52} rounded={0}>계속 쇼핑하기</Button>
        </Fixed>
        

        </>
    )
}