import { Layout, Space } from "antd"
import CurrentUser from "./current-user"

const Header = () => {

  const headerStyles = {
    background:'#fff',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    padding: '0 24px'
  }
  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  )
}

export default Header