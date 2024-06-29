import React from 'react'
import { CompanyList } from './list'
import { Modal } from 'antd'

const Create = () => {
    const {formProps, modalProps} = useModalForm({
        action,
        redirect: 'list',
    })

    return (
        <CompanyList>
          <Modal></Modal>
        </CompanyList>
    )
}

export default Create