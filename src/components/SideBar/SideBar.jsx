import React from 'react'
import { Layout, Input } from 'antd';
import './SideBar.css'

import MenuBar from './MenuBar/MenuBar'
import MenuCreators from './MenuCreators/MenuCreators'

const { Sider } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);

export default function SideBar() {
	return (
		<>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={broken => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}

				style={{ backgroundColor: '#F9FAFC' }}
			>

				<Search placeholder="Search reviews, products, brands" rpu onSearch={onSearch} className='search_Button' />
				<MenuBar />
				<MenuCreators />

			</Sider>
		</>


	)
}
