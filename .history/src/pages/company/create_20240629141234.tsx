import React from 'react'
import { CompanyList } from './list'
import { Modal } from 'antd'
import { redirect } from 'react-router-dom'
import { useModalForm } from '@refinedev/antd'

const Create = () => {
    const go = useGo()

    const {formProps, modalProps} = useModalForm({
        action: 'create',
        defaultVisible: true,
        resource: 'companies',
        redirect: false,
        mutationMode: 'pessimistic',
        onMutationSuccess: () => {
            redirect('/companies')
        }

    })

    return (
        <CompanyList>
          <Modal></Modal>
        </CompanyList>
    )
}

export default Create