import { Layout, Space } from "antd"
import CurrentUser from "./current-user"

const Header = () => {
  return (
    <Layout.Header style={Header.sty}>
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  )
}

export default Header