import { DollarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import { Text } from '../text'

const DealsChart = () => {
  return (
    <Card 
      style={{ height: '100%'}}
      
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          <DollarOutlined />
          <Text size='sm' style={{ marginLeft: '0.5rem' }}>
            Deals
          </Text>
        </div>
      }
      >

      </Card>
  )
}

export default DealsChart 