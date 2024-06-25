import { CreateButton, List } from '@refinedev/antd'
import { useGo } from '@refinedev/core'
import { Table } from 'antd'
import React from 'react'

const CompanyList = () => {
 const go = useGo()

  return (
    <List
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton
          onClick={() => {
           go({
            to: {
              resource: 'companies',
              action: 'create',
            },
            options: {
              keepQuery: true,
            },
            type: 'replace',
           })
          }}
        />
      )}
    >
        <Table>
          
        </Table>
    </List>
  )
}

export default CompanyList 