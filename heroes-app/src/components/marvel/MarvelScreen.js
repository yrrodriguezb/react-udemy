import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  const publisher = 'Marvel Comics'

  return (
    <>
      <HeroList publisher={ publisher } />
    </>
  )
}
