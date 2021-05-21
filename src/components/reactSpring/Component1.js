import React from 'react'
import {useSpring, animated} from 'react-spring'
import { Spring } from 'react-spring'

export default function Component1() {
  const props = useSpring({
    from: {marginLeft:0, opacity: 0},
    to: {marginLeft: 100, opacity: 1}
  })
  return <animated.div style={props}>Component1</animated.div>
}
