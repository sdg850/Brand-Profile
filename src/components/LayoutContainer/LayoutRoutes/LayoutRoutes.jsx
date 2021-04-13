import React from 'react'
import { Button } from 'antd';
import { CommentOutlined, FundProjectionScreenOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './LayoutRoutes.css'


export default function LayoutRoutes() {
	return (
		<div className='routes_container'>
			<Link to='/Products'>
				<Button icon={<AppstoreOutlined />} size='large' className='btn_Routes'> Products </Button>
			</Link>

			<Link to='/Reviews'>
				<Button  icon={<FundProjectionScreenOutlined />} size='large' className='btn_Routes'> Reviews </Button>
			</Link>

			<Link to='/Overviews'>
				<Button icon={<CommentOutlined />} size='large' className='btn_Routes'> Overviews </Button>
			</Link>
		</div>
	)
}
