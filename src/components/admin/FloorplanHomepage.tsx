import React from 'react'
import { useAppSelector } from '../../redux/hooks'


const FloorplanHomepage = () => {
  const userObject = useAppSelector((state) => state.auth)
  console.log('user ob', userObject)
  return (
    <div>
      <p>Floorplan Homepage</p>
    </div>
  )
}

export default FloorplanHomepage