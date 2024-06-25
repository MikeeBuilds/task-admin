import { CreateButton, List } from '@refinedev/antd'
import React from 'react'

const CompanyList = () => {
 const go = useGo()

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