=type Props = {
  resource: "companies" | "contacts" | "deals";
  isLoading: boolean;
  TotalCount: number;
}

const DashboardTotalCountCard = ({ resource, isLoading, TotalCount }: Props) => {
    return (
        <div>DashBoardTotalCountCard</div>
    )
}

export default DashboardTotalCountCard;