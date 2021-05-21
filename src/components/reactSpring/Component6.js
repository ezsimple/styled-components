import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import { Spring } from 'react-spring'
import './style6.css'
export default function Component1() {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })  
  return (
    <div     
      onClick={() => setFlipped(state => !state)}    
    >
      <animated.div className="c back" style={{ opacity: opacity.interpolate(op => {
        console.log({'opacity.interpolate':op}) //opacity값이 마이너스나 1보다 크게 떨어지는 것은 mass 때문
        return 1 - op  //1 - opacity 값을 해서 반대로 한다
      }), transform }} />
      <animated.div className="c front" style={{opacity, transform: transform.interpolate(t =>{
        console.log({'transform.interpolate': t})
        return `${t} rotateX(180deg)` //원래 값에 rotateX를 덮어씌움
      })}}/>
    </div>
  )
}