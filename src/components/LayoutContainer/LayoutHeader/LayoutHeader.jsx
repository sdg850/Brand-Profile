import React from 'react'
import { Layout, Button } from 'antd';
import './LayoutHeader.css'


const { Header } = Layout;

export default function LayoutHeader() {
	return (
		<div className = 'HeaderContainer'>
			<div className='container'>
				<div className = 'info_Container'>
					<div className='general_info'>
                      <div>
						  logo
					  </div>
					  <div className = 'profile'>
						  <span className ='name_profile'>TonyMoly Colombia</span>
						  <span>@TonyMoly.Colombia</span>
					  </div>
					</div>
					<div className = 'general_info'>
					  <div className = 'profile'>
					      <span className ='number'>120</span>
						  <span>FOLLOWERS</span>
					  </div>
					  <div className = 'profile'>
					      <span className ='number'>120</span>
						  <span>REVIEWS</span>
					  </div>
					  <div className = 'profile'>
					       <span className ='number'>120</span>
						  <span>PRODUCTS</span>
					  </div>
					</div>
				</div>
				<span className = 'description_info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae quas? Pariatur consectetur libero nihil est sapiente praesentium cupiditate, numquam, nemo porro repellendus ullam modi dolorem. Consequatur quis nobis aliquid?</span>
				<Button className = 'btn btn-editProfile'>Profile Edit</Button>
				<Button  className = 'btn' >Share Store</Button>

			</div>


		</div>
    //  <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
	)
}
