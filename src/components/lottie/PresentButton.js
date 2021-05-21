
import React, { Component } from 'react'
import UncontrolledLottie from './UncontrolledLottie'
import './PresentButton.css'
class PresentButton extends Component {

    state = {showLottie: false}

    style = {
        position: 'absolute',
        zIndex: '1'
    }

    
    onClick = () => {      
        this.setState({showLottie: true})
    }

    onComplete = () => {
        this.setState({showLottie: false})
    }

    render(){
        console.log('render')
        return(
        <>
            
            <div style={{width: 100, height: 100, position: 'relative'}}></div>

            
                <UncontrolledLottie/>
            
            
            <button disabled={this.state.showLottie} onClick={this.onClick}>선물받기</button>
            
        </>
        )
    }
}

export default PresentButton