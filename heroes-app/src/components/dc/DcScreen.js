import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DCScreen = () => {
  const publisher = 'DC Comics'
  
  return (
    <>
      <HeroList publisher={ publisher } />
    </>

  )
}
