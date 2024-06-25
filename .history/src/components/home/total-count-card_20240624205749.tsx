import { totalCountVariants } from "@/constants";
import { Card } from "antd";
import { Text } from "../text";

type Props = {
    resource: "companies" | "contacts" | "deals";
    isLoading: boolean;
    TotalCount: number;
}

const DashboardTotalCountCard = ({ resource, isLoading, TotalCount }: Props) => {
    const { primaryColor, secondaryColor, icon, title } = totalCountVariants[resource];

    return (
        <Card
            style={{ height: "96px", padding: '0' }}
            bodyStyle={{ padding: '8px 8px 8px 12px' }}
            size="small"
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                }}
            >
                {icon}
                <Text
                >
                    {title}
                </Text>
            </div>
        </Card>
    )
}

export default DashboardTotalCountCard;