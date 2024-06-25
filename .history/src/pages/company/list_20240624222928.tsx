import { CreateButton, List } from '@refinedev/antd'
import { useGo, useTable } from '@refinedev/core'
import { Table } from 'antd'
import React from 'react'

const CompanyList = () => {
 const go = useGo();
 const { tableProps, filters } = useTable({
  resource: 'companies',
  
 })

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
        <Table
          
        >

        </Table>
    </List>
  )
}

export default CompanyList 