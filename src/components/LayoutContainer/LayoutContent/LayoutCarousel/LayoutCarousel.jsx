import React, { isValidElement } from 'react'
import { Carousel } from 'antd';
import './LayoutCarousel.css'

const CarouselData = [
	{'name': 'Shorts', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Shoes', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Coats', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Polos', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Shorts', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Shoes', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Coats', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
	{'name': 'Polos', 'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},

]

export default function LayoutCarousel() {
	return (
		<Carousel autoplay variableWidth>
			{CarouselData.map(item => {
				return (
					<div className='carousel_card'>
						<div className='Carousel-text'>
							<span >{item.name}</span>
						</div>
						<img className='carousel-img' src={item.img} />

					</div>)
			})}
		</Carousel>
	)
}
