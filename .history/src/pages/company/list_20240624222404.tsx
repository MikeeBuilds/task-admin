import { CreateButton, List } from '@refinedev/antd'
import React from 'react'

const CompanyList = () => {
 

  return (
    <List
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton/>
      )}
    >
        
    </List>
  )
}

export default CompanyList 