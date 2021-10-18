import { SettingOutlined, PlayCircleFilled, MenuFoldOutlined } from '@ant-design/icons'

const TABS = [
    {
        title: 'Home',
        route: 'home',
        icon: <SettingOutlined />
    },
    {
        title: 'Gallery',
        route: 'gallery',
        icon: <PlayCircleFilled />
    },
    {
        title: 'Profile',
        route: 'profile',
        icon: <MenuFoldOutlined />
    }
];


export {
    TABS
}