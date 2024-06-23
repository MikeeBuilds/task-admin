import { getNameInitials } from '@/utilities'
import { Avatar as AntdAvatar } from 'antd'
import { AvatarProps } from 'antd/lib'

type Props = AvatarProps & {
    name?: string
}
const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{ 
        backgroundColor: '#f56a00', 
        alignItems:'center',
        border: "none",
        ...style,
    }}
    {...rest}
    >
        {getNameInitials()}
    </AntdAvatar>
  )
}

export default CustomAvatar