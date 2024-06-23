import { Popover, Button } from 'antd/lib'
import React from 'react'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core'

import type { User } from "@/graphql/schema.types"
import { Text } from '../text'
import { SettingOutlined } from '@ant-design/icons'

const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>()

    const content = (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Text
                strong
                style={{
                    padding: '12px 20px'
                }}
            >
                {user?.name}
            </Text>
            <div>
                <Button
                  style={{ textAlign: 'left'}}
                  icon={<SettingOutlined/>}
                  type='text'
                  block
                  onClick={}
                >

                </Button>
            </div>
        </div>
    )

    return (
        <>
            <Popover
                placement="bottomRight"
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar
                    name={user?.name}
                    src={user?.avatarUrl}
                    size="default"
                    style={{
                        cursor: "pointer",
                    }}
                />
            </Popover>
        </>
    )
}

export default CurrentUser