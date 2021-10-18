import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';


const { Sider } = Layout


const SiderNav = props => {

    const { tabs } = props;
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
            >
                {tabs.map(item => (
                    <Menu.Item key={item.title} icon={item.icon}>
                        <Link to={`/${item.route}`}>
                            {item.title}
                        </Link>
                    </Menu.Item>))}

            </Menu>
        </Sider>
    )
}
SiderNav.propTypes = {
    tabs: PropTypes.array
}

SiderNav.defaultProps = {
    tabs: []
}

export default SiderNav;

