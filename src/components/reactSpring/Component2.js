import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Component2() {
  const props = useSpring({
    from: {opacity: 0, marginTop: -100},
    to: {opacity: 1, marginTop: 0},
    config: {
      duration: 500,
      
    }
  })

  return (
    <animated.div style={props}>
      {        
          <div style={style}>
            <h1>Component2</h1>
            <p>
              Aute eiusmod aute aliquip proident elit aliquip magna excepteur.
            </p>            
          </div>
        
      }
    </animated.div>
  )
}

const style = {
  padding: '1rem',
  backgroundColor: 'steelblue',
  color: 'white'
}
