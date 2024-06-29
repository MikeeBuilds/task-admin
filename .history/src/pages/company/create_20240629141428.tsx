import React from 'react'
import { CompanyList } from './list'
import { Modal } from 'antd'
import { redirect } from 'react-router-dom'
import { useModalForm } from '@refinedev/antd'
import { useGo } from '@refinedev/core'

const Create = () => {
    const go = useGo();

    const goToListPage = () => {
        go({
            to: { resource: 'companies', action: 'list' },
            options: { keepQuery: true },
            type: 'replace',
        })
    }

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