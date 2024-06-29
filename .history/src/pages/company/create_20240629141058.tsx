import React from 'react'
import { CompanyList } from './list'
import { Modal } from 'antd'

const Create = () => {
    const {formProps, modalProps} = useModalForm({
        action: 'create',
        defaultVisible: true,
        
    })

    return (
        <CompanyList>
          <Modal></Modal>
        </CompanyList>
    )
}

export default Create