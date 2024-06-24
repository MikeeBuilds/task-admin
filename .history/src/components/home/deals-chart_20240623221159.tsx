import { DollarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import { Text } from '../text'

const DealsChart = () => {
  return (
    <Card 
      style={{ height: '100%'}}
      
      title={
        <div>
          <DollarOutlined />
          <Text size='sm' style={{}}>
            Deals
          </Text>
        </div>
      }
      >

      </Card>
  )
}

export default DealsChart 