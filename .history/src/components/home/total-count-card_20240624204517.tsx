=type Props = {
  resource: "companies" | "contacts" | "deals";
  isLoading: boolean;
  TotalCount: number;
}
const DashboardTotalCountCard = ({
    resource,
    isLoading,
    TotalCount,
}: Props => {

const DashboardTotalCountCard = () => {
  return (
    <div>DashboardTotalCountCard </div>
  )
}

export default DashboardTotalCountCard 