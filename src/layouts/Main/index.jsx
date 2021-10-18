import React from 'react';
import './main.css'
import { Layout } from 'antd';
import Views from '../../views'
import { useSelector } from 'react-redux';
import { TABS } from '../../constants/Header/index';
import { SIDE_MENU_TABS } from '../../constants/SideMenu/index';
import SideMenu from '../../components/layout-components/SideMenu'
import HeaderNav from '../../components/layout-components/Header';

const { Content } = Layout;


export const MainLayout = () => {
    return (
        <Layout>
            <HeaderNav tabs={TABS} />
            <Layout >
                <SideMenu tabs={SIDE_MENU_TABS} />
                <Content className="main-content-layout">
                    <br />
                    <Views />
                </Content>
            </Layout>
        </Layout>
    )
}