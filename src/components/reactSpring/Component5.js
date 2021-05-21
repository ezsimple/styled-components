import React from 'react'
import {Transition, animated} from 'react-spring/renderprops'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

export default class Component5 extends React.Component {
    state = {                
        show: false
    }

    onClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(


            <div>
                <button onClick={this.onClick}>show and hidden</button>
                <Transition
                    //items는 아래의 show 에 파라미터로 들어감
                    items={this.state.show}
                    
                    //Style 부분시작 (아래의 props로 들어감)
                    from={{opacity: 0, position: 'relative', left:'0%', top:'0px', number: 0}}
                    enter={{opacity: 1, left:'50%', number: 100}}
                    leave={{opacity: 0,  left:'100%', number: 0}}
                    //Style 부분 끝

                    config={{duration: 500}}
                >
                    {
                        show =>
                            show && (props => 
                                <animated.div style={props}>{/* 단지 애니메이션을 위한 div 껍데기 */}
                                {/*  */}
                                 <div style={cardStyle}>
                                    <h1>{props.number.toFixed(0)}</h1>
                                     {
                                         props.left
                                     }
                                 </div>
                                </animated.div>
                            )
                    }
                </Transition>
            </div>
        )
    }
}

const cardStyle = {
    width: 100,
    // height: 100,
    padding: '1.5rem',
    backgroundColor: 'steelblue',
    color: 'white'    
}