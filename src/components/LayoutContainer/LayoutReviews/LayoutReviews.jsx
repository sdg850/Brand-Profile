import React, { useState } from 'react'
import LayoutCarousel from '../LayoutContent/LayoutCarousel/LayoutCarousel'

import { Card, Col, Row, Avatar } from 'antd';
import './LayoutReviews.css'

const { Meta } = Card

const Data = [
	{ 'id': '1', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,090', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '2', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,080', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '3', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,070', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '4', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,060', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '5', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,050', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '6', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,040', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '7', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,030', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '8', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,020', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '9', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,010', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '10', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,000', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '11', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,099', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
	{ 'id': '12', 'name': 'TONYMOLY', 'description': 'bordado con purpurina', 'price': '1,098', 'img': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },

]

export default function LayoutReviews() {
const [data, setData] = useState(Data)

	return (
		<>
			<LayoutCarousel />
			<div className="site-card-wrapper">
				<Row gutter={16}>
					{data.map(item => {
						return (

							<div key={item.id}>

								<Col span={8} className='ColContainerCard'>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={<img alt={item.img} src={item.img} />}
									>
										<div className='product-container'>
											<img className='img-produts' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />

											<div className='card_container'>
												<span className='text-center'><b>{item.name}</b> {item.description}</span>
												<span className='text-center'>{item.price}</span>
											</div>

										</div>


									</Card>
								</Col>


							</div>


						)
					})}

				</Row>
			</div>
		</>
	)
}
