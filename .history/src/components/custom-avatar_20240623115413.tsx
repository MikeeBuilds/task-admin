import { Avatar as AntdAvatar } from 'antd'
const CustomAvatar = () => {
  return (
    <AntdAvatar
      alt={"ML"}
      size="small"
      style={{ 
        backgroundColor: '#f56a00', 
        alignItems:'center' 
    }}
    >
        ML
    </AntdAvatar>
  )
}

export default CustomAvatar