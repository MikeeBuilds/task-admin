import { CalendarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import { Text } from '../text'

const UpcomingEvents = () => {
    return (
        <Card
            style={{ height: '100%' }}
            headStyle={{ padding: '8px 16px' }}
            bodyStyle={{ padding: '0 1rem' }}
            title={
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}>
                    <CalendarOutlined />
                    <Text size='sm' style={{ marginLeft}}>
                        Upcoming Events
                    </Text>
                </div>
            }
        >

        </Card>
    )
}

export default UpcomingEvents 