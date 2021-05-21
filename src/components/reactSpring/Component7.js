import React from 'react'
import {Transition, animated, config} from 'react-spring/renderprops'

import "./Component7.css"

export default class Component7 extends React.Component{
    state = {
        menuOpen: false
    }

    onClick = () =>{
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render(){
        return(

            <div>

                <button onClick={this.onClick}>Say</button>
                
                {/* <div style={card}>Hi</div> */}
                <Transition
                    items={this.state.menuOpen}
                    from={{
                        position: 'fixed',
                        top: '0%',                        
                        right: '-80vmin',
                        opacity: 1
                    }}
                    enter={{                        
                        top: '0%',                        
                        right: '0vmin',
                        opacity: 1
                    }}
                    leave={{                        
                        top: '0%',                        
                        right: '-80vmin',
                        opacity: 0
                    }}
                    config={{duration: 200, mass: 5, tension: 500, friction: 80}}
                >       
                {
                    toggle =>
                        toggle && (
                            props => <animated.div style={props}>
                                <div className="wrap">
                                    <div className="grandTitle">최근본 상품</div>  
                                    <div>    
                                        <div className="item">
                                        <div className="photoBox">        
                                            <img src="https://lh3.googleusercontent.com/proxy/OlnQ-r74tR9Aoe4-FMbY3zNHY0MPx0FRUBdiDuBzrrt1w0NctUmQrgloqveho_hPbgBqIFS9DbT42DkA_EJxy_17QNVN8_r5M7kpUg3GmhBPboFWqvQuZg" alt=""/>
                                        </div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque obcaecati molestias, dolores labore aliquam ipsam unde odit totam? Dignissimos reprehenderit eaque, rem modi nobis itaque dolore officia officiis quos.
                                        </div>
                                        </div>    
                                        
                                        <div className="item">
                                        <div className="photoBox">        
                                            <img src="https://lh3.googleusercontent.com/proxy/OlnQ-r74tR9Aoe4-FMbY3zNHY0MPx0FRUBdiDuBzrrt1w0NctUmQrgloqveho_hPbgBqIFS9DbT42DkA_EJxy_17QNVN8_r5M7kpUg3GmhBPboFWqvQuZg" alt=""/>
                                        </div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque obcaecati molestias, dolores labore aliquam ipsam unde odit 
                                        </div>
                                        </div>
                                        
                                    </div>
                                    </div>
                            </animated.div>
                        )
                }         
                </Transition>

                <div>Eiusmod consectetur qui aliqua amet eu dolore qui ullamco nulla sit ad.Nisi esse nulla nostrud sint occaecat excepteur aliqua Lorem elit anim labore. In Lorem laborum nisi pariatur ex reprehenderit. Commodo et consequat exercitation commodo ad ipsum in. Ipsum minim aliqua voluptate do minim pariatur exercitation minim labore. Velit deserunt aliqua in velit. Duis enim culpa ut Lorem magna.
Est cillum commodo dolor voluptate velit eu veniam dolore ex enim ipsum.
Consectetur dolore ut adipisicing velit non officia consectetur elit veniam do. Ullamco incididunt adipisicing aliqua est et duis. Enim veniam proident sunt ex consequat labore mollit reprehenderit officia in sit nostrud.

Non pariatur consectetur sunt aliquip voluptate enim nulla est est Lorem velit sunt ipsum esse. Veniam aute eu fugiat eiusmod dolor. Proident laboris adipisicing labore ipsum fugiat adipisicing culpa anim ut amet elit mollit in cupidatat. Laborum sunt id id laborum. Eu labore do nulla sint ut laboris irure. Commodo esse sit qui quis in anim.

Incididunt consectetur voluptate laboris ex. Consectetur do sit sunt tempor cillum proident amet. Ut velit non exercitation in ad est ad adipisicing nisi labore non voluptate. Nostrud id exercitation aute nostrud occaecat elit.

Qui irure quis dolor mollit aliquip eu veniam qui. Exercitation culpa in dolor officia quis ipsum incididunt proident labore dolore cillum cupidatat. Elit amet amet velit ipsum commodo. Irure culpa proident dolor amet exercitation sunt sunt veniam adipisicing sit laborum tempor elit. Ullamco et sunt cupidatat ullamco nostrud.

Voluptate commodo do consectetur amet dolore eiusmod incididunt culpa ad. Mollit proident ex ad dolore nostrud. Ea laborum incididunt culpa do fugiat consequat duis dolor officia non. Laboris cillum non in enim ipsum officia nisi et irure fugiat laboris mollit aute adipisicing. Amet ipsum ad ad consectetur proident amet minim minim pariatur in eiusmod. Minim cupidatat eu exercitation qui.

Pariatur nulla esse ad ullamco velit nisi id occaecat excepteur mollit qui deserunt. Fugiat deserunt aliqua eu deserunt duis. Commodo officia qui laborum veniam. Incididunt mollit aliqua dolor sit amet duis qui laborum. Pariatur exercitation esse ullamco esse labore cillum sint exercitation id deserunt irure adipisicing nostrud do.

Lorem dolore mollit dolore Lorem. Sint irure enim incididunt sit esse excepteur ea excepteur ullamco proident. Cillum non dolor sunt amet est dolore do duis nulla dolore ea veniam. Ut aliqua ad eu nulla id duis. Duis incididunt esse ut duis commodo consectetur laborum aliquip Lorem aliqua dolore occaecat excepteur.
</div>



            </div>
        )
    }
}