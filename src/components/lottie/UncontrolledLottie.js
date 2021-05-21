// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lottiesJson/present.json'

class UncontrolledLottie extends Component {


// eventListeners =[
//     {
//         eventName: 'complete',
//         callback: this.props.onComplete,
//     },
// ]

  render(){

    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },
      
    };

    return(
        <Lottie options={defaultOptions}
              height={'70%'}
              width={'70%'}
            //   eventListeners={this.eventListeners}
        />
    )
  }
}

export default UncontrolledLottie