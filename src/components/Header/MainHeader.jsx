import React from 'react'
import 'antd/dist/antd.css';
import './MainHeader.css'
import { Layout, Menu, Input } from 'antd';


const { Header } = Layout
const { Search } = Input;

const onSearch = value => console.log(value);

export default function MainHeader() {
	return (
		
			<Header className="Main_header">
				<div>TonyMoly Colombia</div>
				<div className='right_side'>
				<Search placeholder="Search reviews, products, brands" rpu onSearch={onSearch} className='Main_search' />
				<Menu theme="Litgh" mode="horizontal" defaultSelectedKeys={['2']}>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
				</div>
			</Header>
				
		
	)
}
