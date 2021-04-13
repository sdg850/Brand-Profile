import React,{ useState } from 'react'
import Sobremarca from './SobreMarca/Sobremarca'
import Indicadores from './Indicadores/Indicadores'
import './LayoutOverviews.css'

const Data = [
	{ 'id': '1', 'descripciongeneral': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eius, voluptatum nobis asperiores placeat eos perspiciatis magnam cum, ad reprehenderit culpa, a voluptatem nesciunt iusto. Molestias quasi corrupti inventore deserunt?', 'sobreMarca': { 'id': '1', 'tipomarca': 'Distribuidora internacional verificada', 'sucursales': 'Medellín, Bogotá, Cali', 'Reviews': 'Más de 2000 Reviews de 326 usuarios', 'desde': 'El 6 de diciembre de 2019' }, 'indicadores': [{ 'id': '1', 'tiemporespuesta': [{ 'tipo': 'Alto', 'descripcion': 'Indice de respuesta 90% tiempo de respuesta de 1 minuto' }], 'tiempoenvio': [{ 'tipo': 'Rapido', 'descripcion': 'Duración del envio de 1 a 3 días hábiles' }], 'devoluciones':[{ 'tipo': 'Bajo', 'descripcion': 'Indice de devoluciones 9%' }], 'cancelaciones': [{ 'tipo': 'Bajo', 'descripcion': 'Indice de cancelaciones 2%' }], 'actividadvendedores':[{ 'tipo': 'Alto', 'descripcion': 'Más de 50 Reviews por semana' }] }] }
]

export default function LayoutOverviews() {
	const [data, setData] = useState(Data)

	return (
		<div>
			{data.map(item => {
				return(
					<>
					<div className = 'description_overview'>
					<h2>Descripción</h2>
					<span>{item.descripciongeneral}</span>
					</div>

					<Sobremarca sobreMarca={ item.sobreMarca } />
					<Indicadores  indicador={ item.indicadores } />
					</>
				)		

			})}
		</div>
	)
}
