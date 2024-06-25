import { Card } from "antd";


type Props = {
  resource: "companies" | "contacts" | "deals";
  isLoading: boolean;
  TotalCount: number;
}

const DashboardTotalCountCard = ({ resource, isLoading, TotalCount }: Props) => {
    return (
        <Card>

        </Card>
    )
}

export default DashboardTotalCountCard;