import { DashboardTotalCountCard } from '@/components'
import { DealsChart, UpcomingEvents } from '@/components/home'
import { Col, Row } from 'antd'


export const Home = () => {
 const { data, isLoading}

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={8}>
          <DashboardTotalCountCard 
          resource="companies"
          isLoading={isLoading}
          totalCount={data?.data.companies.totalCount}
          />
        </Col>
        <Col xs={24} xl={8}>
          <DashboardTotalCountCard 
          resource="contracts"
          isLoading={isLoading}
          totalCount={data?.data.contracts.totalCount}
          />
        </Col>
        <Col xs={24} xl={8}>
          <DashboardTotalCountCard 
          resource="deals"
          isLoading={isLoading}
          totalCount={data?.data.deals.totalCount}
          />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: '32px',
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: '460px',
          }}
        >
          <UpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: '460px',
          }}
        >
          <DealsChart />
        </Col>
      </Row>
    </div>
  )
}

