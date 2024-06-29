import React from 'react'
import { CompanyList } from './list'
import { Modal } from 'antd'
import { redirect } from 'react-router-dom'

const Create = () => {
    const {formProps, modalProps} = useModalForm({
        action: 'create',
        defaultVisible: true,
        resource: 'companies',
        redirect: fasle
    })

    return (
        <CompanyList>
          <Modal></Modal>
        </CompanyList>
    )
}

export default Create