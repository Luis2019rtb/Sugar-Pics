import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd';
import { StrikethroughOutlined } from '@ant-design/icons'
import _navs from './Options';
import './index.css';

const { Header } = Layout;
const { Title } = Typography;


const HeaderNav = (props) => {
    const { title, tabs } = props;
    return (
        <Header className='header' style={{ height: "75px", paddingTop: "10px" }}  >
            <Menu mode='horizontal' theme="dark" >
                <Title className="MainLogo" >
                    <StrikethroughOutlined />
                    <Link to="/" style={{ color: "white" }}>{title}</Link>
                </Title>

                <Menu mode='horizontal' theme="dark" defaultSelectedKeys={['Home']} >
                    {tabs.map(item => {
                        return (
                            <Menu.Item eventKey={null} key={item.title} icon={item.icon}>
                                <Link to={`/${item.route}`}>{item.title}</Link>
                            </Menu.Item>
                        )
                    })}

                </Menu>
            </Menu>
        </Header>
    )


}
HeaderNav.propTypes = {
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            route: PropTypes.string.isRequired,
            icon: PropTypes.object
        })
    )
}

HeaderNav.defaultProps = {
    title: 'Sugar',
    tabs: _navs
}
export default HeaderNav;