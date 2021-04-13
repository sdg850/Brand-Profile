import React, { useState } from 'react'
import { Menu } from 'antd';
import './MenuCreators.css'
import { UserOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;



const Data = [
	{ 'name': 'Luna Cordoba', 'icon': <UserOutlined />, 'email': '@Luna.Cordoba' },
	{ 'name': 'Luna Isabel', 'icon': <UserOutlined />, 'email': '@Luna.Isabel' },
	{ 'name': 'Barbara Gómez', 'icon': <UserOutlined />, 'email': '@Barbara.Gomez' },
	{ 'name': 'GianCarlos Alvaraado', 'icon': <UserOutlined />, 'email': '@GianCarlos.Alvaraado' },
	{ 'name': 'Paola Cebedo', 'icon': <UserOutlined />, 'email': '@Paola.Cebedo' },
	{ 'name': 'Luna Cordoba', 'icon': <UserOutlined />, 'email': '@Luna.Cordoba' },
	{ 'name': 'Luna Isabel', 'icon': <UserOutlined />, 'email': '@Luna.Isabel' },
	{ 'name': 'Barbara Gómez', 'icon': <UserOutlined />, 'email': '@Barbara.Gomez' },
	{ 'name': 'GianCarlos Alvaraado', 'icon': <UserOutlined />, 'email': '@GianCarlos.Alvaraado' },
	{ 'name': 'Paola Cebedo', 'icon': <UserOutlined />, 'email': '@Paola.Cebedo' }
]


export default function MenuCreators() {
const [data, setData] = useState(Data)

	return (
		<>
			<h3>Yours Creators</h3>
			<Menu style={{ backgroundColor: '#F9FAFC' }} mode="inline" defaultSelectedKeys={['4']}>
				<Menu.Item >					
						<div className='profile_Creators'>
							<div >{Data[0].name}</div>
							<div >{Data[0].email}</div>													
						</div>
				</Menu.Item>
				<Menu.Item >					
						<div >
							<div >{Data[1].name}</div>
							<div >{Data[1].email}</div>													
						</div>
				</Menu.Item>
				<Menu.Item >					
						<div >
							<div >{Data[2].name}</div>
							<div >{Data[2].email}</div>													
						</div>
				</Menu.Item>
				<Menu.Item >					
						<div >
							<div >{Data[3].name}</div>
							<div >{Data[3].email}</div>													
						</div>
				</Menu.Item>
				<Menu.Item >					
						<div >
							<div >{Data[4].name}</div>
							<div >{Data[4].email}</div>													
						</div>
				</Menu.Item>
				<Menu.Item >					
						<div >
							<div >{Data[5].name}</div>
							<div >{Data[5].email}</div>													
						</div>
				</Menu.Item>

				

				<SubMenu key={1} title='See all' >
					{Data.map(item => {
						return (
							<Menu.Item key={item.name}>
								{item.name}
							</Menu.Item>
						)

					})}

				</SubMenu>


				)





		</Menu>
		</>
	)
}
