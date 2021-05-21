import React from 'react'
import { useSpring, animated} from 'react-spring'
import { Spring } from 'react-spring/renderprops'

export default  class Component4 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {scrollTop: 0}

        this.div = React.createRef();
        this.textInput = React.createRef();

      }
      
      onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        this.setState({
          scrollTop: scrollTop
        })
      }
    
      componentDidMount(){
        console.log(this.textInput.current)
      }

      render() {

        // const props = useSpring({ scroll: 200, from: { scroll: 0 }})

        const { scrollTop } = this.state

        return (

          <>

            <Spring
                from={{opacity: 1, scroll: 0, overflow: 'auto', width: 600, height: 100, boxShadow: '1px 2px 2px rgba(0,0,0, 0)' }}
                to={{opacity: 1, scroll: 200, boxShadow: '1px 2px 2px rgba(0,0,0, 0.8)'}}
                config={{ duration: 1000 }}                
            >
          {
              props => (
                  
                      <div
                            style={props}                            
                            
                            onScroll={this.onScroll}
                            scrollY={props.scroll}
                            
                            // style={{
                            //     border: '1px solid black',
                            //     width: '600px',
                            //     height: '100px',
                            //     overflow: 'scroll',
                            // }} 
                        >
                            <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
                            <p>ScrollTop is {scrollTop}</p>
                            <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
                            <p>ScrollTop is {scrollTop}</p>
                            <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
                            <p>ScrollTop is {scrollTop}</p>
                            <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
                            <p>ScrollTop is {scrollTop}</p>
                            <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
                            <p>ScrollTop is {scrollTop}</p>
                            <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
                            <p>ScrollTop is {scrollTop}</p>
                        </div>
                  
              )
          }

            </Spring>
            </>
        )
      }
}


const c2Style = {
    background: "slateblue",
    color: "white",
    padding: "1.5rem"
  };
  
// export default function Component4() {
  
//     const props = useSpring({ scroll: 200, from: { scroll: 0 },
//     config: {
//         duration: 1000,        
//     } })
//     return <animated.div style={style} 
//     scrollTop={props.scroll} >
            
//                 EsDuis consectetur aute ut incididunt est exercitation incididunt eiusmod duis. Et aute culpa exercitation voluptate est commodo amet duis ad duis. Dolore nisi eiusmod duis qui duis id consequat duis veniam incididunt in.

// Ea incididunt dolore occaecat consequat reprehenderit tempor pariatur occaecat excepteur ullamco magna sint. Occaecat voluptate incididunt quis dolor laboris fugiat veniam proident culpa. Culpa eiusmod aute et proident adipisicing adipisicing dolore. Esse sint commodo mollit officia anim.

// Adipisicing et dolore anim et nostrud aliquip velit exercitation ex exercitation occaecat enim nisi do. Enim adipisicing non aliqua excepteur cupidatat. Labore nulla sit adipisicing aliqua quis elit. Exercitation ipsum laboris et ullamco dolor id cupidatat do elit. Aute nulla nostrud anim magna nisi adipisicing adipisicing. Do occaecat incididunt cillum ea dolore. Cillum qui ipsum qui occaecat.

// Duis adipisicing enim anim nostrud laborum voluptate sunt officia occaecat enim veniam. Sit labore adipisicing ut dolore eu veniam ea laborum labore est. Magna sint consectetur proident nulla nulla ad labore nostrud sint dolore nostrud magna. Labore aliqua dolore proident dolor ea.

// Aute reprehenderit irure labore nostrud eu fugiat. Aliqua labore id esse consequat ea consequat excepteur nostrud est anim non proident ipsum laboris. Amet occaecat do ea deserunt ad adipisicing voluptate et voluptate fugiat incididunt.

// Do nostrud do minim elit aliquip adipisicing tempor nostrud pariatur sit Lorem excepteur. Consequat officia nulla velit ullamco amet. Fugiat aliqua consequat nisi fugiat cillum sunt excepteur aute amet eu ipsum id sunt ipsum. Ipsum reprehenderit commodo ex consequat do incididunt ex.

// Magna eiusmod culpa dolor ex reprehenderit pariatur. Veniam ut in eu sint eiusmod consectetur occaecat reprehenderit excepteur Lorem commodo irure nulla. Labore voluptate nisi consectetur non nisi deserunt sit est officia ea magna quis. Mollit est et ut Lorem sunt laborum do proident ea labore adipisicing eiusmod aliquip veniam.t Lorem dolor sit laboris deserunt sit officia amet ea cillum ea proident exercitation.
//         </animated.div>
// }

// const style = {
//     height: 100,
//     width: '100%',
//     overflow: 'auto'
// }