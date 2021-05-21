import React from 'react'
import { Spring } from 'react-spring/renderprops'

export default function Component3() {
  
  return (
    <Spring 
      from={{opacity: 0, fontSize: 12,  number: 0, background: 'linear-gradient(to right, red, white)'}}
      to={{opacity: 1, fontSize: 30, number: 1}}
      config={{delay: 500, duration: 3000}}
    >
      {
        props => 
          <div style={props}>
            <div style={style}>
              <h1>Component3</h1>
              <p>
                Aute eiusmod aute aliquip proident elit aliquip magna excepteur.
              </p>            
              <p>{props.number}</p>              
              <p>{props.age}</p>              
            </div>
          </div>
        
      }      
    </Spring>
  )
}

const style = {
  padding: '1rem',
  // backgroundColor: 'steelblue',
  // color: 'white'
}
