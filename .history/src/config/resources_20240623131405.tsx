import { DashboardOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "Dashboard",
    list: '/',
    meta: {
        label: 'Dashboard',
        icon: <DashboardOutlined />,
    }
  },
  {
    name: 'companies',
    list: '/companies',
    show: '/companies/:id',
    create: '/companies/create',
    edit: '/companies/edit/:id',
    meta: {
        label: 'Companies',
        icon: <ShopOutlined />,
    }
  },
];