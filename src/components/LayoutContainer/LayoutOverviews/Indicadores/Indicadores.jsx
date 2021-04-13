import React from 'react'
import './Indicadores.css'


export default function Indicadores({ indicador }) {


	return (



		<div className='Indicadores_container'>

			{indicador.map(item => {
				return (
					<>
						<h2>Indicadores</h2>
						<div></div>
						<span>Tiempo de respuesta <span className = 'mark'>{item.tiemporespuesta[0].tipo}</span></span>
						<span>{item.tiemporespuesta[0].descripcion} </span>
						<span>Tiempo de envio <span className = 'mark'>{item.tiempoenvio[0].tipo}</span></span>
						<span>{item.tiempoenvio[0].descripcion}</span>
						<span>Devoluciones <span className = 'mark'>{item.devoluciones[0].tipo}</span></span>
						<span>{item.devoluciones[0].descripcion}</span>
						<span>Cancelaciones <span className = 'mark'>{item.cancelaciones[0].tipo}</span></span>
						<span>{item.cancelaciones[0].descripcion}</span>
						<span>Actividad de vendedores <span className = 'mark'>{item.actividadvendedores[0].tipo}</span></span>
						<span>{item.actividadvendedores[0].descripcion}</span>
					</>
				)

			})}
		</div>

	)
}
