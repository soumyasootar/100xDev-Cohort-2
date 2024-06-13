import React from 'react'
import { useRecoilValue } from 'recoil'
import evenSelector from '../Store/Selector/evenSelector'

const EvenSelector = () => {
    const isEven = useRecoilValue(evenSelector)
    console.log("isEven: ", isEven);
  return (
    <div>EvenSelector : {isEven}</div>
  )
}

export default EvenSelector