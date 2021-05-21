import React from 'react'
import {Transition, animated, config} from 'react-spring/renderprops'

import "./Component7.css"

const style={
    card: {
        // border: '1px solid black',
        
    },
    header: {
        position: 'relative',
        background: 'darkgray',
        color: 'white',
        height: 30,
        border: '1px solid black',
        zIndex: 2
    },
    body: {
        // position: 'relative'
    }
}

export default class Component8 extends React.Component{
    state = {
        menuOpen: false
    }

    onClick = () =>{
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render(){
        return(

            <div>


                <div style={style.card}>
                    <div style={style.header} onClick={this.onClick}>header</div>
                    <Transition
                        items={this.state.menuOpen}
                        from={{
                            top: -200, 
                            position: 'relative',
                            background: 'white',
                            zIndex: 1
                        }}
                        enter={{
                            top: 0,
                            zIndex: 1
                        }}
                        leave={{
                            top: -200,
                            zIndex: 1
                        }}
                        config={{
                            duration: 500
                        }}
                    >
                        {/* <div style={style.body}> */}
                        {
                            toggle =>
                                toggle && (
                                    props => 
                                        <animated.div style={props}>
                                                                    In et id incididunt ex fugiat. Laboris consequat sint reprehenderit enim fugiat ipsum ex aute dolore ea qui. Magna cupidatat sint laboris magna sunt culpa aliquip cupidatat duis. Id quis aliquip duis officia cillum.
                                            Laboris id duis elit aliqua amet. Reprehenderit reprehenderit proident cupidatat dolore aute tempor Lorem tempor labore labore cupidatat ullamco. Veniam proident dolor dolore enim qui fugiat et esse. Occaecat anim velit quis dolor eiusmod sit pariatur laboris consectetur irure cillum Lorem esse.
                                        </animated.div>
                                )
                        }                        
                    </Transition>
                </div>
            </div>
        )
    }
}