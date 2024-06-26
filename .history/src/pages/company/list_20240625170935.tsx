import CustomAvatar from '@/components/custom-avatar'
import { Text } from '@/components/text'
import { COMPANIES_LIST_QUERY } from '@/graphql/queries'
import { Company } from '@/graphql/schema.types'
import { SearchOutlined } from '@ant-design/icons'
import { CreateButton, FilterDropdown, List, useTable } from '@refinedev/antd'
import { getDefaultFilter, useGo } from '@refinedev/core'
import { Input, Space, Table } from 'antd'
import React from 'react'

const CompanyList = () => {
  const go = useGo();
  const { tableProps, filters } = useTable({
    resource: 'companies',
    pagination: {
      pageSize: 12,
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY
    }
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
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
        }}
      >
        <Table.Column<Company>
          dataIndex="name"
          title="Company Name"
          defaultFilteredValue={getDefaultFilter('id', filters)}
          filterIcon={<SearchOutlined />}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input placeholder="Search Co" />
            </FilterDropdown>
          )}
          render={(value,record) => (
            <Space>

            </Space>
          )}
        <Table.Column />
      </Table>
    </List>
  )
}

export default CompanyList 