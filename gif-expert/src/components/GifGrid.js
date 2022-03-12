import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	const { data:images, loading } = useFetchGifs(category);

  return (
		<React.Fragment>
			<h3 className='animate__animated animate__fadeIn'>{ category }</h3>

			{ loading && <a className='animate__animated animate__flash'>Loading</a> }

			{ 
				<div className='card-grid'>
					{
						images.map(img => (
							<GifGridItem 
								key={ img.id } 
								{ ...img } 
							/>
						))
					}
				</div> 
			}
		</React.Fragment>
  )
}
