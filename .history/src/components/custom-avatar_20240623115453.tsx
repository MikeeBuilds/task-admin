import { Avatar as AntdAvatar } from 'antd'
const CustomAvatar = ({ name, style, ...rest}) => {
  return (
    <AntdAvatar
      alt={"ML"}
      size="small"
      style={{ 
        backgroundColor: '#f56a00', 
        alignItems:'center',
        border: "none" 
    }}
    >
        ML
    </AntdAvatar>
  )
}

export default CustomAvatar