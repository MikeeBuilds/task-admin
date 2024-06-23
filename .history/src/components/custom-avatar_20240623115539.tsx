import { Avatar as AntdAvatar } from 'antd'

type Props = AvatarProps & {
    name: string
}
const CustomAvatar = ({ name, style, ...rest}: Props) => {
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