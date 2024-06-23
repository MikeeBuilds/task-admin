import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = () => {
    return (
        <ThemedLayoutV2
          Header={Header}
        >
            {children}
            index
        </ThemedLayoutV2>
    )
}

export default Layout