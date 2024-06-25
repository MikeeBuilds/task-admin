import { CreateButton, List } from '@refinedev/antd'
import { useGo } from '@refinedev/core'
import React from 'react'

const CompanyList = () => {
 const go = useGo()

  return (
    <List
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton
          onClick={() => {
            to={}
            go('/company/create')
          }}
        />
      )}
    >
        
    </List>
  )
}

export default CompanyList 