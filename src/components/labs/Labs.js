import React, { useState } from 'react'
import { useModal } from '../util'
import { Div, Button } from '../styledComponents/shared'
import CustomModal from './CustomModal'
import UserDetail from '../blocery/b2c/UserDetail'
export default () => {
    const [modalOpen, setModalOpen, selected, setSelected, setModalState] = useModal()
    return (
        <Div p={16}>
            <Button bg='white' bc='dark'
                onClick={() => {
                    //선택한 data 보관 후 모달오픈 호출
                    setSelected({ name: 'Jaden' })
                    setModalState(true)
                }}
            >selected</Button>

            <CustomModal
                isActive={modalOpen}
                handleClose={() => setModalState(false)}>

                {/* child */}
                <UserDetail data={selected} />


            </CustomModal>
        </Div>
    )
} 