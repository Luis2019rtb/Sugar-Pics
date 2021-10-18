import { SettingOutlined, PlayCircleFilled, MenuFoldOutlined } from '@ant-design/icons'

const SIDE_MENU_TABS = [
    {
        title: 'My Gallery',
        route: 'gallery',
        icon: <SettingOutlined />
    },
    {
        title: 'My Preferences',
        route: 'myPreferences',
        icon: <PlayCircleFilled />
    },
    {
        title: 'Settings',
        route: 'setting',
        icon: <MenuFoldOutlined />
    }
];


export {
    SIDE_MENU_TABS
}