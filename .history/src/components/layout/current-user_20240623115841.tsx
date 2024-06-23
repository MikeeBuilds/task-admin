import { Popover, Button } from 'antd/lib'
import React from 'react'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core'

const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>()
    return (
        <>
        <Popover
          placement="bottomRight"
          trigger="click"
          overlayInnerStyle={{ padding: 0 }}
          overlayStyle={{ zIndex: 999}}
        >
          <CustomAvatar
            
          />
        </Popover>
        </>
    )
}

export default CurrentUser