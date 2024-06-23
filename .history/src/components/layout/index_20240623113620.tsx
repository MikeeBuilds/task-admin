import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = ({ children}: React.PropsWithChildren) => {
    return (
        <ThemedLayoutV2
          Header={Header}
          Title={(titleProps) => {
            
          }}
        >
            {children}
        </ThemedLayoutV2>
    )
}

export default Layout