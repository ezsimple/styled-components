// ControlledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lottiesJson/heart.json'

class ControlledLottie extends Component {
  state = {isStopped: false, isPaused: false}

  render(){
    const buttonStyle = {
      display: 'inline-block',
      margin: '10px auto',
      marginRight: '10px',
      border: 'none',
      color: 'white',
      backgroundColor: '#647DFF',
      borderRadius: '2px',
      fontSize: '15px'

    };

    const defaultOptions = {      
      // container: document.getElementById('test'),
      // renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: animationData,      
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'  // or meet
      },      
      //path 직접 넣어줘도됨
      // path: "https://labs.nearpod.com/bodymovin/demo/chameleon/chameleon2.json"
    };

    return(
      <div className="controlled">
        <h1>Controlled Lottie</h1>
        <p>Uses state manipulation to start, stop and pause animations</p>
        
        <div onClick={(e)=>{          
          e.preventDefault()
          return
        }}>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
              title={'타이틀'}
              isClickToPauseDisabled={true}   //클릭시 멈추지 않도록함
        />
        </div>
        
        <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>Stop</button>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: false, isPaused: false })}>Play</button>
        <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>Pause</button>
      </div>
    )
  }
}

export default ControlledLottie