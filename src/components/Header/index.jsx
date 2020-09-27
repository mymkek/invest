import React from 'react';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";



const Header = ({}) => {

    return (
        <header>
            <Menu mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    <Link to={'/'}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    <Link to={'/corellation'}>
                        Candle Chart
                    </Link>
                </Menu.Item>
            </Menu>
        </header>
    );
};

Header.propTypes = {};

export default Header;