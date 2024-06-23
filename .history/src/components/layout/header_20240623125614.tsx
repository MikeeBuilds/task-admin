import { Layout } from "antd"
import CurrentUser from "./current-user"

const Header = () => {
  return (
    <Layout.Header>
        <CurrentUser />
    </Layout.Header>
  )
}

export default Header