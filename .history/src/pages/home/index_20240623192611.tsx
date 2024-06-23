import { Col, Row } from 'antd'
import React from 'react'

export const Home = () => {
  return (
    <Row>
      <Col 
        xs={24}
        sm={24}
        xl={8}
        style={{
          height: '460px',
        }}
      >
        CalendarUpcomingEvents
      </Col>
      <Col 
        xs={24}
        sm={24}
        xl={8}
        style={{
          height: '460px',
        }}
      >
        Dashboard
      </Col>
    </Row>
  )
}

