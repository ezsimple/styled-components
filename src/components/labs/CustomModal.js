import React from 'react'
import {Div, Button} from '../styledComponents/shared'
import styled, {css} from 'styled-components'
import {color} from '../styledComponents/Properties'

/* type 1 children 의 height 값이 modal 의 height 값보다 크면 modal 을 튀어나가버리는 모달, 별로 좋지않은듯.. */
// const Mask = styled(Div)`
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: rgba(0,0,0, 0.5);
// `;
// const Modal = styled(Div)`
//     // padding: 16px;
//     position: relative;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 80%;        
//     max-height: 90%;
//     background-color: ${color.white};   
//     opacity: 0;
//     animation: fadeIn 0.4s forwards;
//     // overflow: auto;

//     @keyframes fadeIn{
//         0%{};
//         100%{opacity: 1;};
//     }
// `;
/* type 2 mask 에서  overflow 를 제어해서 화면보다 height가 클 경우 modal 이 전체적으로 스크롤되면서 움직일 수 있다.  */
const Mask = styled(Div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);    
    padding: 10vmin;
    overflow: auto;
`;
const Modal = styled(Div)`
    padding: 16px;
    position: relative;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // width: 80%;        
    // height: 80%;
    background-color: ${color.white};   
    opacity: 0;
    animation: fadeIn 0.4s forwards;
    // overflow: auto;

    @keyframes fadeIn{
        0%{};
        100%{opacity: 1;};
    }
`;
const CloseButton = styled(Button)`
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    width: 40px;
    height: 40px;
    border-radius: 100%!important; //blocery에서 부트스트랩 때문인지.. important 를 줘야함
`;

export default ({isActive, children, handleClose}) => {
    if(!isActive) return null
    /* type 1 heigt 값을 지정해야 되는 모달 */
    // return(
    //     isActive && (
    //         <Mask onClick={handleClose}>
    //             <Modal onClick={(e)=>e.stopPropagation()}>
    //                 <Div style={{width: '100%', height: '400px', overflow: 'auto'}}>
    //                 {
    //                     children
    //                 }
    //                 </Div>
    //                 <CloseButton onClick={handleClose}>x</CloseButton>
    //             </Modal>
    //         </Mask>
    //     )
    // )
    /* type 2 전체 스크롤 모달 */
    return(
        isActive && (
            <Mask onClick={handleClose}>
                <Modal onClick={(e)=>e.stopPropagation()}>
                    
                    {
                        children
                    }
                    
                    <CloseButton onClick={handleClose}>X</CloseButton>
                </Modal>
            </Mask>
        )
    )
    
}
        
    