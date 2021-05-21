import React from 'react'

import ControlledLottie from './ControlledLottie'
import UncontrolledLottie from './UncontrolledLottie'
import PresentButton from './PresentButton'

export default function(){
    return(
        <div>
            <ControlledLottie />
            <UncontrolledLottie />
            <PresentButton />
        </div>
    )
}