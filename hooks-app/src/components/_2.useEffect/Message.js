import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [ coord, setCoord ] = useState({x: 0, y: 0})
  const { x, y } = coord; 

  useEffect(() => {
    console.log('Componente Montado');

    const mouseMove = (e) => {
      const coord = { x: e.x, y: e.y };
      setCoord(coord);
    }

    window.addEventListener('mousemove', mouseMove);
  
    return () => {
      console.log('Componente Desmontado');

      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])
  

  return (
    <div className="alert alert-primary mt-2" role="alert">
      <p className='fs-2'>Coordenadas: </p>
      <p>x: { x }, y: { y }</p>
    </div>
  )
}
