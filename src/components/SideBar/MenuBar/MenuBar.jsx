import React, { useState } from 'react'
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './MenuBar.css'



const { SubMenu } = Menu;

const MenuSideBar = [
	{ 'name': 'Explore all', 'icon': <UserOutlined />, 'submenu': [{ 'name': 'Products' }, { 'name': 'Reviews' }, { 'name': 'Influencers' }, { 'name': 'Brands' }] },
	{ 'name': 'Categories', 'icon':  <UserOutlined /> , 'submenu': [{ 'name': 'Shorts' }, { 'name': 'Shoes' }, { 'name': 'Polos' }, { 'name': 'coats' }] },
	{ 'name': 'Offers', 'icon': <UserOutlined />, 'submenu': [{ 'name': '10% off' }, { 'name': '20% off' }, { 'name': '30% off' }, { 'name': 'More..' }] },
	{ 'name': 'New', 'icon': <UserOutlined />, 'submenu': [{ 'name': 'Shorts' }, { 'name': 'Shoes' }, { 'name': 'Polos' }, { 'name': 'coats' }] },
]

export default function MenuBar() {
   const [data, setData] = useState(MenuSideBar)


	return (
		<>
			<Menu style={{ backgroundColor: '#F9FAFC' }} mode="vertical" defaultSelectedKeys={['4']}>
				{data.map(item => {
					return (
						<SubMenu key={item.name} className='Submenu_container'  icon={item.icon} title={item.name} >
							{item.submenu.map(item => {
								return (

									
									<Menu.Item key={item.name}>
										{item.name}
										
									</Menu.Item>
								)

							})}

						</SubMenu>


					)
				})}
			
			</Menu>
			
		</>
	)
}
