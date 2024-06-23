import { Popover, Button } from 'antd/lib'
import React from 'react'
import CustomAvatar from '../custom-avatar'

const CurrentUser = () => {
    const { data: user } = 
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