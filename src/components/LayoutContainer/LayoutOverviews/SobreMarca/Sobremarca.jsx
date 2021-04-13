import React from 'react'
import './Sobremarca.css'

export default function Sobremarca({ sobreMarca }) {
	return (
		<div className='sobremarca_container'>
			<h2>Sobre la marca</h2>
			<div></div>
			<span>Tipo de empresa</span>
			<span className='description'>{sobreMarca.tipomarca}</span>
			<span>Sucursales en</span>
			<span>{sobreMarca.sucursales}</span>
			<span>Reviews</span>
			<span>{sobreMarca.Reviews}</span>
			<span>En tipzty desde</span>
			<span>{sobreMarca.desde}</span>
		</div>
	)
}
