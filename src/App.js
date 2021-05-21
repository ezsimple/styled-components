import React from 'react';
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import {A, Link, Div} from './components/styledComponents/shared'
import {HrThin} from './components/styledComponents/mixedIn'
import styled, {css} from 'styled-components'

import Test from './components/test/Test'
import BuyFinish from './components/blocery/b2c/BuyFinish'
import Category from './components/blocery/b2c/Category'
import Question from './components/blocery/b2c/Question'
import GoodsListByItemKind from './components/blocery/b2c/GoodsListByItemKind'
import Labs from './components/labs/Labs'

const Nav = styled(Div)`
  & > a{
    padding: 10px;
  }
`;


function App() {
  return (
    <div className="App">      
        {/* <Lottie /> */}
        {/* <ReactSpring /> */}
        
        <Router>
          <Nav>
            <Link bg='white' to='/test' >테스트</Link>
            <Link bg='white' to='/labs' >Labs</Link>
            <Link bg='white' to='/buyFinish' >구매완료</Link>
            <Link bg='white' to='/category' >카테고리</Link>
            <Link bg='white' to='/question' >상품정보_상품문의</Link>       
            <Link bg='white' to='/goodsListByItemKind' >상세_카테고리</Link>       



          </Nav>
          <HrThin/>
          <Switch>
            <Route exact path='/test' component={Test}/>
            <Route exact path='/labs' component={Labs}/>
            <Route exact path='/buyFinish' component={BuyFinish}/>
            <Route exact path='/category' component={Category}/>
            <Route exact path='/question' component={Question}/>
            <Route exact path='/goodsListByItemKind' component={GoodsListByItemKind}/>
              
              
          </Switch>
        </Router>

        
    </div>
  );
}

export default App;
