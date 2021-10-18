import { Layout } from 'antd';
import Auth from '../../../views/Auth'
const { Content } = Layout;


function index(props) {
    return (
        <>
            
            <Content style={{ backgroundColor: "#001529", textAlign: 'center' }} >
                <Auth />
                {/* Login */}
            </Content>
        </>
    );
}

export default index;