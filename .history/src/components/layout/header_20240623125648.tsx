import { Layout, Space } from "antd"
import CurrentUser from "./current-user"

const Header = () => {
  return (
    <Layout.Header>
      <Space align="">
        <CurrentUser />
      </Space>
    </Layout.Header>
  )
}

export default Header