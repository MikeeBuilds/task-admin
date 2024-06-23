import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = () => {
    return (
        <ThemedLayoutV2
        header={<Header/>}
            index
        </ThemedLayoutV2>
    )
}

export default Layout