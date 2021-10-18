import './auth.css'
import { useTitle } from 'react-use';
import { useSelector } from 'react-redux';
import { Card, Button, Input, Space, Avatar } from 'antd';
import { LoginOutlined, ClearOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons'
import Header from '../../components/layout-components/Header'


// Initial Default User
const defaultUserCredentials = {
    user: "root@root.com",
    password: "12345"
}
const Auth = props => {
    // Redux Reducer Read
    const user = useSelector(state => state.auth);
    const { Meta } = Card;

    // Change Page title
    useTitle("Sugar Pics Gallery");

    return (
        <>
            {/* Color for background  backgroundColor: "#001529" */}
            <Card
                style={{ width: 300 }}
                actions={[
                    <Button shape="circle" icon={<LoginOutlined style={{ color: 'green' }} key="login" />} />,
                    <Button shape="circle" icon={<ClearOutlined style={{ color: 'red' }} key="clear" />} />,
                ]}
            >
                <Space direction="vertical" style={{ textAlign: "center" }} >
                    <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<UserOutlined />} />
                    <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
                    <Input.Password size="large" placeholder="Password" prefix={<KeyOutlined />} />
                </Space>

            </Card>
        </>);

};

export default Auth;