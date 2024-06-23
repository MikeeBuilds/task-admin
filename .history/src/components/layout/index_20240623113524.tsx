import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = ({ children}: React.props) => {
    return (
        <ThemedLayoutV2
          Header={Header}
        >
            {children}
        </ThemedLayoutV2>
    )
}

export default Layout