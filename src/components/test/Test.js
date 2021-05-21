import React from 'react';
import { Link as BrowserLink } from 'react-router-dom'
import {
  Div, Right, Flex, Span, Img,
  Button, Input, A, Link, Sticky
} from '../styledComponents/shared'
import { Header } from '../styledComponents/mixedIn'
import {color} from '../styledComponents/Properties'
import {getValue} from '../styledComponents/Util'
import styled from 'styled-components';


function MenuList() {
  return (
    <>
      <Div as={A} href="#props" p={10} bg='white'>props</Div>
      <Div as={A} href="#button" p={10} bg='white'>Button</Div>
      <Div as={A} href="#input" p={10} bg='white'>Input</Div>
      <Div as={A} href="#a" p={10} bg='white'>As(Anchor)</Div>
      <Div as={A} href="#link" p={10} bg='white'>Link</Div>
    </>
  )
}

const ScrollBody = styled(Div)`
  overflow: auto;
  height: 600px;
  margin: 16px;
`;
const Title = styled(Sticky)`
  background-color: ${color.light};  
  padding: ${getValue(10)};
  font-size: 23px;
  font-weight: 600;
`;
const Desc = styled(Div)`  
  padding: 5px 5px 7px 5px;  
  font-size: 14px;  
  font-weight: 600;
  color: ${color.green};
`;
export default function () {
  return (
    <>
      <MenuList />
      <ScrollBody>

      
      <Title id="props">props</Title>
        <Div maxWidth={400}>
          <Desc>noti : 알림</Desc>      
          <Desc>notiTop: 세로위치</Desc>      
          <Desc>notiRight: 오른쪽위치</Desc>      
          
          
          
          <Div bc='black' noti>Div</Div><br/>      
          <Span bc='black' pr={6} noti>Span</Span><br/><br/>
          <Button bc='black' noti notiTop={10}>Button</Button><br/>
          <Link bc='black' noti>Link</Link><br/>

          <Desc>notiNew - notification</Desc>    

          <Div bc='black' notiNew>Div</Div><br/>      
          <Span bc='black' pr={6} notiNew>Span</Span><br/><br/>
          <Button bc='black' notiNew>Button</Button><br/>
          <Link bc='black' notiNew>Link</Link><br/>

          <Desc>notiBg: 배경색상</Desc>      
          <Link bc='black' notiNew notiBg='green'>Link</Link><br/>


        </Div>
      

        <Title id="button">Button</Title>

        <Button fontSize={16} fg={'white'} bg={'green'} rounded={10} height={52} block bold>Block</Button><br /><br />
        <Button fontSize={14} fg={'black'} bg={'white'} bc={'light'} rounded={5}>인증번호</Button>
        <Button fontSize={14} fg={'black'} bg={'white'} bc={'black'} rounded={5}>인증번호</Button>
        <Button fg={'white'} bg={'green'} rounded={'100%'} width={76} height={76}>ii</Button>
        <Button fg={'black'} bg={'white'} bc={'light'} rounded={'100%'} width={76} height={76}>ii</Button>
        <Button fg={'black'} bg={'white'} rounded={'100%'} width={76} height={76} shadow>ii</Button>
        <Button fontSize={12} height={24} fg={'white'} bg={'green'} rounded={4} pl={10} pr={10} m={10}>Like</Button>
        <Button fontSize={12} height={24} fg={'black'} bg={'white'} bc={'light'} rounded={4}>Like</Button>
        <Button fontSize={16} fg={'white'} bg={'green'} noActive>noActive</Button><br /><br />

        <Title id="input">Input</Title>
        <Input placeholder="input" /><br />
        <Input placeholder="input" bold /><br />
        <Input placeholder="input" readOnly /><br />
        <Input green placeholder="input" /><br />
        <Input green underLine placeholder="input" /><br />
        <Input green underLine placeholder="input" padding="0" /><br />
        <Input underLine placeholder="input" padding="0" /><br />
        <Input underLine placeholder="input" padding="0" width={200} /><br />
        <Input underLine placeholder="input" padding="0" width={200} height={150} /><br />
        <Input underLine placeholder="input" block /><br />
        <br />

        <Title id="a">A</Title>
        <A href="#">anchor</A>

        <Title id="link">Link</Title>
        <Link>Link</Link>
        <Flex m={10}>
          <Div as={Link} bg='white' bc='black' width={200} height={100}
            to='/category'>
            Div as Link
        </Div>
          <Div p={10}>
            <code>
              div 는 flex 속성을 넣지 않았음
          </code>
          </Div>
        </Flex>

        <Flex m={10}>
          <Flex as={A} href={''}
            bg='white' bc='black' width={200} height={100}
            display='flex'
            justifyContent='center'
            alignItems='center' to='/category'
            >
            Flex as A
        </Flex>
          <Div p={10}><code>{`<Flex as={A} href='' `}</code></Div>
        </Flex>

        <Flex m={10}>
          <Flex as={Link} to='/category'
            bg='white' bc='black' width={200} height={100}
            display='flex'
            justifyContent='center'
            alignItems='center' >
            Flex as Link
        </Flex>
          <Div p={10}><code>{`<Flex as={Link} to='' //styled Link`}</code></Div>
        </Flex>



        <Flex m={10}>
          <Flex as={BrowserLink} to={''}
            bg='white' bc='black' width={200} height={100}
            display='flex'
            justifyContent='center'
            alignItems='center' to='/category'>
            Flex as BrowserLink
        </Flex>
          <Div p={10}><code>{`<Flex as={Link} to='' //react-router-com Link`}</code></Div>
        </Flex>

        

      </ScrollBody>
    </>
  );
}
