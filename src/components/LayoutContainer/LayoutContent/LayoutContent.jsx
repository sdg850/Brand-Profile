import React from 'react'
import { Layout } from 'antd';
import LayoutCarousel from './LayoutCarousel/LayoutCarousel'
import LayoutProducts from './LayoutProducts/LayoutProducts'
import './LayoutContent.css'


const { Content } = Layout;

export default function LayoutContent() {
  return (


    <div className="MainContainer" >
      <LayoutCarousel />
      <LayoutProducts />
    </div>

  )
}
